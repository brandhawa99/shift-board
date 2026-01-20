import { LucideGithub } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="p-2 flex justify-between items-center w-full">
      <div className="invisible">asdf</div>
      <div>Made By: Baltej Randhawa</div>
      <div>
        <a
          className="flex"
          target="_blank"
          href="https://github.com/brandhawa99/shift-board"
        >
          <LucideGithub />
          Repo Link
        </a>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://unsplash.com/@scalzodesign?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        >
          Samuel Scalzo
        </a>{' '}
        on{' '}
        <a href="https://unsplash.com/photos/white-concrete-building-illustration-iqGtaQnk3VM?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">
          Unsplash
        </a>
      </div>
    </footer>
  )
}

export default Footer
