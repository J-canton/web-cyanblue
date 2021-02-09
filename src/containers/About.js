import HalfJumbotron from '../components/halfJumbotron';
import Footer from '../components/footer';
import {Line} from 'rc-progress';
function About() {
    return (
    <div className="big-container">
        <HalfJumbotron
            title='ABOUT ME'
            text="Have beginning wherein spirit. Bearing unto. To after light. Good image can't without hath fly beast him fish firmament fish Face waters fly unto spirit i doesn't one waters divide."
        />
        <div className="about-title">
            <h2>JUAN LUIS CANTÓN</h2>
        </div>
        <div className="about-container">
            <div className="about-content">
                <h3>SOBRE MI</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>Name</td>
                            <td>Juan Luis Cantón</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Juan Luis Cantón</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Juan Luis Cantón</td>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>Juan Luis Cantón</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div className="about-content">
                <h3>WEB SKILLS</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                HTML 5
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                CSS 3
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                SASS
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                JS
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                REACT
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                NODE JS
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                <h3>VIDEOGAMES</h3>
                <table>
                    <tbody>
                        <tr>
                            <td>
                                C#
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                UNITY
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                    </tbody>
                </table>
                   <h3>DISEÑO GRÁFICO</h3>
                   <table>
                    <tbody>
                        <tr>
                            <td>
                                ADOBE SUITE
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                        <tr>
                            <td>
                                BLENDER
                            </td>
                            <td>
                                <Line percent="20" strokeWidth="1" strokeColor="#009fe3" />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <Footer/>
    </div>
    );
  }
  
  export default About;