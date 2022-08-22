import mongoose from 'mongoose';
import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import { createError } from './../error.js';
import jwt from 'jsonwebtoken';

// 회원가입
export const signup = async (req, res, next) => {
	try {
		const salt = bcrypt.genSaltSync(10);
		const hash = bcrypt.hashSync(req.body.password, salt);
		const newUser = new User({ ...req.body, password: hash });

		await newUser.save();
		res.status(200).send('User has been created!');
	} catch (error) {
		next(err);
	}
};

// 로그인
export const signin = async (req, res, next) => {
	try {
		const user = await User.findOne({ name: req.body.name });
		if (!user) return next(createError(404, 'User not found!'));

		const isCorrect = await bcrypt.compare(req.body.password, user.password);
		if (!isCorrect) return next(createError(400, 'Wrong Credentials!'));

		// 로그인 성공시 JWT 생성 및 cookie에 전달
		const token = jwt.sign({ id: user._id }, process.env.JWT);

		// rest 연산를 통해서 password는 전달 X
		const { password, ...others } = user._doc;
		res
			.cookie('access_token', token, {
				httpOnly: true,
			})
			.status(200)
			.json(others);
	} catch (error) {
		next(err);
	}
};
