import React from 'react';

interface Coder {
  name: string;
  skills: string[];
  hardWorker: boolean;
  quickLearner: boolean;
  problemSolver: boolean;
  hireable: () => boolean;
}

const CoderProfile: React.FC = () => {
  const coder: Coder = {
    name: 'Yash Bhoir',
    skills: ['React', 'NextJS', 'Redux', 'Express', 'NestJS', 'MySQL', 'MongoDB', 'Docker', 'AWS'],
    hardWorker: true,
    quickLearner: true,
    problemSolver: true,
    hireable: function() {
      return this.hardWorker && this.problemSolver && this.skills.length >= 5;
    },
  };

  return (
    <div className='order-1 lg:order-2 from-[#0d1224] border-[#1b2c68a0] relative rounded-lg border bg-gradient-to-r to-[#0a0d37] 'style={styles.codeBlock}>
      <pre>
        <code>
          <span style={styles.keyword}>const</span> coder = {'{'} <br />
          &nbsp;&nbsp;<span style={styles.string}>'name'</span>: <span style={styles.string}>'{coder.name}'</span>,<br />
          &nbsp;&nbsp;<span style={styles.string}>'skills'</span>: [{' '}
          {coder.skills.map((skill, index) => (
            <span key={index} style={styles.string}>
              '{skill}'{index < coder.skills.length - 1 ? ', ' : ''}
            </span>
          ))}{' '}],<br />
          &nbsp;&nbsp;<span style={styles.string}>'hardWorker'</span>: <span style={styles.boolean}>
            {coder.hardWorker.toString()}
          </span>,<br />
          &nbsp;&nbsp;<span style={styles.string}>'quickLearner'</span>: <span style={styles.boolean}>
            {coder.quickLearner.toString()}
          </span>,<br />
          &nbsp;&nbsp;<span style={styles.string}>'problemSolver'</span>: <span style={styles.boolean}>
            {coder.problemSolver.toString()}
          </span>,<br />
          &nbsp;&nbsp;<span style={styles.string}>'hireable'</span>: <span style={styles.function}>function</span>() {'{'} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.keyword}>return</span> {'{'} <br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span style={styles.keyword}>this</span>.<span style={styles.string}>'hardWorker'</span> &amp;&amp;
          <span style={styles.keyword}>this</span>.<span style={styles.string}>'problemSolver'</span> &amp;&amp;
          <span style={styles.keyword}>this</span>.<span style={styles.string}>'skills'</span>.<span style={styles.function}>length</span> &gt;= <span style={styles.number}>5</span>
          <br />
          &nbsp;&nbsp;&nbsp;&nbsp;{'};'} <br />
          &nbsp;&nbsp;{'}'} <br />
          {'};'}
        </code>
      </pre>
    </div>
  );
};

const styles = {
  codeBlock: {
    backgroundColor: '#202020',
    padding: '20px',
    borderRadius: '5px',
    fontFamily: 'monospace',
    fontSize: '16px',
    color: '#fff',
  },
  keyword: {
    color: '#ff6b6b',
  },
  string: {
    color: '#69d9ff',
  },
  number: {
    color: '#f0ad4e',
  },
  boolean: {
    color: '#9b59b6',
  },
  function: {
    color: '#2ecc71',
  },
};

export default CoderProfile;