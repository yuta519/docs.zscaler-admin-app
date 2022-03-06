const Skills: React.VFC = () => {
  return (
    <div className="p-4">
      <p className="font-mono font-bold sm:text-base md:text-3xl">Skills</p>
      <hr className="my-2" />

      <div className="mt-8 pl-4">
        <p className="font-mono font-bold sm:text-base md:text-xl">Frontend</p>
        <hr />
        <div className="flex justify-left space-x-4 lg:py-10 lg:col-end-13">
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/typescript/typescript-original.svg" alt="Typescript" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/javascript/javascript-original.svg" alt="Javascript" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/react/react-original-wordmark.svg" alt="React" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/nextjs/nextjs-original-wordmark.svg" alt="Next.JS" width="50" height="50" />
        </div>
      </div>

      <div className="mt-8 pl-4">
        <p className="font-mono font-bold sm:text-base md:text-xl">Backend</p>
        <hr />
        <div className="flex justify-left space-x-4 lg:py-10 lg:col-end-13">
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/python/python-original-wordmark.svg" alt="Python" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/django/django-original.svg" alt="django" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/ruby/ruby-original-wordmark.svg" alt="Ruby" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/go/go-original.svg" alt="go" width="50" height="50" />
        </div>
      </div>

      <div className="mt-8 pl-4">
        <p className="font-mono font-bold sm:text-base md:text-xl">Infrastructure</p>
        <hr />
        <div className="flex justify-left space-x-4 lg:py-10 lg:col-end-13">
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/docker/docker-original-wordmark.svg" alt="docker" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="aws" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/git/git-original-wordmark.svg" alt="git" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/github/github-original-wordmark.svg" alt="github" width="50" height="50" />
        </div>
      </div>

      <div className="mt-8 pl-4">
        <p className="font-mono font-bold sm:text-base md:text-xl">Using Editors</p>
        <hr />
        <div className="flex justify-left space-x-4 lg:py-10 lg:col-end-13">
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/vscode/vscode-original-wordmark.svg" alt="vscode" width="50" height="50" />
          <img src="https://raw.githubusercontent.com/devicons/devicon/9f4f5cdb393299a81125eb5127929ea7bfe42889/icons/vim/vim-original.svg" alt="vim" width="50" height="50" />
          <img src="https://cdn.worldvectorlogo.com/logos/sublime-text.svg" alt="Sublime Text" width="50" height="50" />
        </div>
      </div>

    </div>
  )
}

export default Skills
