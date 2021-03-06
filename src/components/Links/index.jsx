import React from 'react'
import { withPrefix } from 'gatsby'
import './style.scss'
import '../../assets/fonts/fontello-5ad71e07/css/fontello.css'

class Links extends React.Component {
  render() {
    const author = this.props.data
    const links = {
      telegram: author.telegram,
      twitter: author.twitter,
      github: author.github,
      rss: author.rss,
      linkedin: author.linkedin,
      email: author.email,
    }

    return (
      <div className="links">
        <ul className="links__list">
          <li className="links__list-item">
            <a
              href={`https://www.twitter.com/${links.twitter}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-twitter" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.github.com/${links.github}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-github" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`mailto:${links.email}`}>
              <i className="icon-mail" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={`telegram:${links.telegram}`}>
              <i className="icon-paper-plane" />
            </a>
          </li>
          <li className="links__list-item">
            <a href={links.rss}>
              <i className="icon-rss" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={`https://www.linkedin.com/in/${links.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-linkedin" />
            </a>
          </li>
          <li className="links__list-item">
            <a
              href={withPrefix('/BlakeWatkinsResume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="icon-file-pdf" />
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Links
