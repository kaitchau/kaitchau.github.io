import '../stylesheets/Projects.css';

export default function Projects() {
    return (
        <div id='projects' className="projects-container">
            <div className='projects-content'>
                <h1>Projects</h1>
                <ul className='projects-list'>
                    <li>
                        <h2>Gerrymandering Analysis of U.S. Congressional District Plans</h2>
                        <p>Description of Project 1</p>
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