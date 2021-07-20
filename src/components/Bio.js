import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container mx-auto flex md:px-10 py-20 sm:px-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col mb-16 md:mb-0 items-center text-center sm:w-full px-10">
        
          <h1 className="title-font-only sm:text-3xl text-2xl mb-4 font-medium resbluetext">
            A bit about me.<img className="ml-5 w-7 mb-4 inline" src="./blackflower.PNG" alt="Just a pretty divider flower!"/>
            <br className="lg:inline-block" />
          </h1>
          <img src="three.jpg" className="md:w-1/3 sm:w-full pb-6" alt="Diane, Alexandra and I! You can guess which one is the pup."/>
          <div className="text-xl leading-relaxed md:w-1/2 sm:w-full">
          <p>
          Well, it's not <i>entirely</i> tech hobbies.</p><br className="inline-block"/><p> I'm a massive NFL geek, I root Dallas but that's sort of secondary to what fascinates me about the sport. I did learn R so I could keep track of each time a player gained his jersey number in yards on a play. Last year's leader was Chase Edmonds. 29 yards. Still waiting on Aaron Donald's endzone pick-six.
          </p><br/>
          <p>
          I'm a dedicated doer and maker of crosswords, a constant composer of music with too many chord changes, and a 3D art hobbyist. I keep a DIY recording studio upstate so these parts of my life can have their dedicated time.
          </p><br/>
          <p>
          The other side of my professional life is mixing recorded and live music, as well teaching a range of instruments to a wide range of ages. My hope is to expose students to music via as many angles as possible, since (as with most art forms) all roads lead to the same weird amorphous place.
          </p><br/>
          <p>I'm also obligated to say that I keep a constantly-evolving Arch machine, or else they won't let me into the meetings. Sometimes it's the best tool, often it's the most fun!</p>
          <p><br/>
          I think mostly I'm just a learner. Addicted to the feeling of "Oh! I get it now".</p><br className="inline-block"/><p>Sometimes I bet I actually do.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}