import { Route, Routes } from 'react-router-dom';
import { lazy, useEffect } from 'react';
import Layout from './Layout';
import { useDispatch } from 'react-redux';
import { GlobalStyle } from './global.styled';
import NotFound from 'pages/NotFound';
import Welcome from 'pages/Welcome';
import { refreshUser } from 'customRedux/auth/operations';
import { useAuth } from 'hooks';
import { PrivateRoute } from './PrivateRoute';
import Login from 'pages/login/Login';
import { LecturesProvider } from 'context/LecturesContext';
import LecturePageMath1 from 'pages/mathematics1/LecturePageMath1';
import VideoPageMath1 from 'pages/mathematics1/VideoPageMath1';
import SimulatorPageMath1 from 'pages/mathematics1/SimulatorPageMath1';
import { VideosProvider } from 'context/VideosContext';
import { SimulatorsProvider } from 'context/SimulatorsContext';
import LecturePageMath2 from 'pages/mathematics2/LecturePageMath2';
import VideoPageMath2 from 'pages/mathematics2/VideoPageMath2';
import SimulatorPageMath2 from 'pages/mathematics2/SimulatorPageMath2';
import LecturePageInf1 from 'pages/Informatics1/LecturePageInf1';
import VideoPageInf1 from 'pages/Informatics1/VideoPageInf1';
import LecturePageInf2 from 'pages/informatics2/LecturePageInf2';
import VideoPageInf2 from 'pages/informatics2/VideoPageInf2';

const HomePage = lazy(() => import('pages/home/HomePage'));
const Digest = lazy(() => import('pages/digest/Digest'));
const Mathematics1 = lazy(() => import('pages/mathematics1/Mathematics1'));
const Mathematics2 = lazy(() => import('pages/mathematics2/Mathematics2'));
const Informatics1 = lazy(() => import('pages/Informatics1/Informatics1'));
const Informatics2 = lazy(() => import('pages/informatics2/Informatics2'));
const PrivatePage = lazy(() => import('pages/private/private'));
const PrivateWork = lazy(() => import('pages/private/addWork'));
const WorkRequirements = lazy(() => import('pages/private/WorkRequirements'));
const WorkTheme = lazy(() => import('pages/private/WorkTheme'));
const WorkExplanation = lazy(() => import('pages/private/WorkExplanation'));

export default function App() {
  const dispatch = useDispatch();
  const { isRefreshing } = useAuth();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <b> Почекайте, йде завантаження...</b>
  ) : (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />

          <Route
            path="/mathematics1"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LecturesProvider>
                    <VideosProvider>
                      <SimulatorsProvider>
                        <Mathematics1 />
                      </SimulatorsProvider>
                    </VideosProvider>
                  </LecturesProvider>} />
            }
          >
            <Route path="lecture" element={<LecturePageMath1 />}>
              <Route path=":lectureId" element={'#'}></Route>
            </Route>
            
            <Route path="video" element={<VideoPageMath1 />} >
            <Route path=":videoId" element={'#'}></Route>
            </Route>

            <Route path="simulator" element={<SimulatorPageMath1 />} >
            <Route path=":simulatorId" element={'#'}></Route>
            </Route>
          </Route>

          <Route
            path="/mathematics2"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LecturesProvider>
                    <VideosProvider>
                      <SimulatorsProvider>
                        <Mathematics2 />
                      </SimulatorsProvider>
                    </VideosProvider>
                  </LecturesProvider>} />
            }
            >
              <Route path="lecture" element={<LecturePageMath2 />}>
              <Route path=":lectureId" element={'#'}></Route>
              </Route>
            
              <Route path="video" element={<VideoPageMath2 />} >
              <Route path=":videoId" element={'#'}></Route>
              </Route>

              <Route path="simulator" element={<SimulatorPageMath2 />} >
              <Route path=":simulatorId" element={'#'}></Route>
              </Route>
           </Route> 
          
          <Route
            path="/informatics1"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LecturesProvider>
                    <VideosProvider>
                      <SimulatorsProvider>
                        <Informatics1 />
                      </SimulatorsProvider>
                    </VideosProvider>
                  </LecturesProvider>} />
                }  
             >   
              <Route path="lecture" element={<LecturePageInf1 />}>
              <Route path=":lectureId" element={'#'}></Route>
              </Route>
            
              <Route path="video" element={<VideoPageInf1 />} >
              <Route path=":videoId" element={'#'}></Route>
              </Route>
              
           </Route>
            
          <Route
            path="/informatics2"
            element={
              <PrivateRoute
                redirectTo="/login"
                component={
                  <LecturesProvider>
                    <VideosProvider>
                      <SimulatorsProvider>
                        <Informatics2 />
                      </SimulatorsProvider>
                    </VideosProvider> 
                  </LecturesProvider>} />
            }
            >
              <Route path="lecture" element={<LecturePageInf2 />}>
              <Route path=":lectureId" element={'#'}></Route>
              </Route>
            
              <Route path="video" element={<VideoPageInf2 />} >
              <Route path=":videoId" element={'#'}></Route>
              </Route>
              
          </Route>
          <Route path="/digest" element={<Digest />} />

          <Route
            path="/private"
            element={
              <PrivateRoute redirectTo="/login" component={<PrivatePage />} />
            }
          />

          <Route path="/addwork" element={<PrivateWork />}>
            <Route path="requirements" element={<WorkRequirements />} />
            <Route path="theme" element={<WorkTheme />} />
            <Route path="explanation" element={<WorkExplanation />} />
          </Route>

          <Route path="/notfound" element={<NotFound />} />
          <Route path="/welcome" element={<Welcome />} />
          <Route path="/login" element={<Login />} />
        </Route>
      </Routes>
      <GlobalStyle />
    </>
  );
}
