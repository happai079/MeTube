import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import Menu from './components/Menu';
import Navbar from './components/Navbar';
import { darkTheme, lightTheme } from './utils/Theme';
import Home from './pages/Home';
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import Search from './pages/Search';

const Container = styled.div`
	display: flex;
`;

const Main = styled.div`
	flex: 7;
	background-color: ${({ theme }) => theme.bg};
`;

const Wrapper = styled.div`
	padding: 22px 30px;
	&::-webkit-scrollbar {
		width: 10px;
	}
	&::-webkit-scrollbar,
	&::-webkit-scrollbar-thumb {
		overflow: visible;
		border-radius: 4px;
	}
	&::-webkit-scrollbar-thumb {
		background: rgb(255 255 255 / 20%);
	}
`;

function App() {
	const [darkMode, setDarkMode] = useState(true);

	return (
		<ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
			<Container>
				<BrowserRouter>
					<Menu darkMode={darkMode} setDarkMode={setDarkMode} />
					<Main>
						<Navbar />
						<Wrapper>
							<Routes>
								<Route path="/">
									<Route index element={<Home type="random" />} />
									<Route path="trends" element={<Home type="trend" />} />
									<Route path="subscriptions" element={<Home type="sub" />} />
									<Route path="search" element={<Search />} />
									<Route path="signin" element={<SignIn />} />
									<Route path="video">
										<Route path=":id" element={<Video />} />
									</Route>
								</Route>
							</Routes>
						</Wrapper>
					</Main>
				</BrowserRouter>
			</Container>
		</ThemeProvider>
	);
}

export default App;
