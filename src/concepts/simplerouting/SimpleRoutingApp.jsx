import React from "react";

function HomePage() {
  return <p>This is Homepage</p>;
}

function AboutPage() {
  return <p>This is About page</p>;
}

function FAQPage() {
  return <p>This is FAQ page</p>;
}

function Link({ target, navigate, children }) {
  return (
    <a 
      // jika tidak ada href maka tidak bisa ditekan
      href={target}
      onClick={(event) => {
        event.preventDefault();
        // berbeda dengan class component akan menjadi 'this.props.navigate'
        navigate(target);
      }}  
    >
      {children}
    </a>
  );
}

// class Link extends React.Component {
//   handleClick = (event) => {
//     event.preventDefault();
//     this.props.navigate(this.props.target);
//   }

//   render() {
//     return (
//       <a 
//         href={this.props.target}
//         onClick={this.handleClick}
//       />
//         {this.props.children}
//       </a>
//     );
//   }
// }

// ^komponen inti
export default class SimpleRoutingApp extends React.Component {
  constructor(props) {
    super(props);

    // inisialisasi state
    this.state = {
      page: '/'
    }
  }

  navigate = (target) => {
    this.setState(() => {
      return {
        page: target
      }
    })
  }

  render() {
    // * cara 1: if sederhana
    // if (this.state.page === '/') {
    //   return <HomePage />
    // }
    // if (this.state.page === '/about') {
    //   return <AboutPage />
    // }
    // if (this.state.page === '/faq') {
    //   return <FAQPage />
    // }

    // * cara 2: Short-circuit evaluation
    return (
      <>
        <header>
          <ul>
            <li>
              <Link target="/" navigate={this.navigate}>
                Home
              </Link>
            </li>
            <li>
              <Link target='/about' navigate={this.navigate}>
                About
              </Link>
            </li>
            <li>
              <Link target='/faq' navigate={this.navigate}>
                FAQ
              </Link>
            </li>
          </ul>
        </header>
        <main>
          {this.state.page === '/' && <HomePage />}
          {this.state.page === '/about' && <AboutPage />}
          {this.state.page === '/faq' && <FAQPage />}
        </main>
      </>
    );
  }
}