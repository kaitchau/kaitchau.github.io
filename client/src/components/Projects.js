import '../stylesheets/Projects.css';

export default function Projects() {
    return (
        <div id='projects' className="projects-container">
            <div className='projects-content'>
                <h1>Projects</h1>
                <ul className='projects-list'>
                    <li>
                        <h2>Gerrymandering Analysis of U.S. Congressional District Plans</h2>
                        <p>Created and integrated interactive data visualizations using React and Chart.js to analyze and display gerrymandering data, including scatter plots, bar charts, and box-and-whisker plots.</p>
                        <img src={`${process.env.PUBLIC_URL}/votifier-dt-ss.png`}></img>
                        <br/>
                        <img src={`${process.env.PUBLIC_URL}/votifier-md-heatmap.png`}></img>
                        <br/>
                        <a href='https://votifier.net'>https://votifier.net</a>
                        <br/>
                        <a href='https://github.com/SBU-CSE-416/votifier'>https://github.com/SBU-CSE-416/votifier</a>
                    </li>
                    <li>
                        <h2>Project 2</h2>
                    </li>
                </ul>
            </div>

        </div>
    );
}