import { siGithub } from 'simple-icons'

const Footer = () => {
  return (
    <footer className="p-2 flex justify-between items-center w-full px-4">
      <div>Made By: Baltej Randhawa</div>
      <div className="flex gap-2">
        <a
          className="flex gap-2 items-center"
          target="_blank"
          href="https://github.com/brandhawa99/shift-board"
        >
          <svg
            role="img"
            viewBox="0 0 24 24"
            fill={'#181717'}
            style={{ width: '20px', height: '20px' }}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d={siGithub.path} />
          </svg>
          Repo Link
        </a>
        <div className="flex flex-col">
          - Images Credit -
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/@scalzodesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
          >
            Samuel Scalzo
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://unsplash.com/@sammywilliams?utm_content=creditCopyText"
          >
            Sander Sammy
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer
