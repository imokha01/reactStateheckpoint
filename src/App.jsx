import { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fullName: "SAMUEL FREDERICK SMITH",
        bio: 'Sam Smith is a British singer and songwriter born on May 19, 1992, in London, England. They rose to prominence in 2012 with the feature on Disclosure\'s single "Latch." In 2014, Sam Smith released their debut studio album, "In the Lonely Hour," which included the hit single "Stay with Me." The song earned critical acclaim and won several awards, including the Grammy Award for Record of the Year. Known for their soulful voice and poignant lyrics, Sam Smith has become a prominent figure in the music industry with a focus on themes of love and personal experiences. Please verify with up-to-date sources for the latest information on Sam Smith.',
        imgSrc: "https://res.cloudinary.com/dzgplbgdi/image/upload/v1709555369/jsx%20checkpoint/Sam%20Smith.png", // Replace with your image URL
        profession: "Music Artist",
      },
      show: false,
      mountTime: null,
    };
  }

  componentDidMount() {
    this.setState({ mountTime: new Date() });
  }

  toggleShow = () => {
    this.setState((prevState) => ({ show: !prevState.show }));
  };

  render() {
    const { person, show, mountTime } = this.state;

    return (
      <div className="flex justify-center ">
        <div className="flex flex-col gap-7 m-[20px] w-[600px] border">
          <button className="border  text-[20px] text-red-400" onClick={this.toggleShow}>Toggle Profile</button>

          {show && (
            <div className="flex flex-col gap-4 p-6">
              <img src={person.imgSrc} alt={person.fullName} />
              <h2 className="text-[25px]">Full Name: {person.fullName}</h2>
              <h2 className="text-[25px]">Description:</h2>
              <p>{person.bio}</p>
              
              <p className="text-[25px]">Profession: {person.profession}</p>
            </div>
          )}

          {mountTime && (
            <p  className="px-6 text-blue-400">
              Component mounted {Math.floor((new Date() - mountTime) / 1000)}{" "}
              seconds ago.
            </p>
          )}
        </div>
      </div>
    );
  }
}

export default App;

