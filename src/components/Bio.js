import React from "react";

export default function Bio() {
  return (
    <section id="bio">
      <div className="container mx-auto flex md:px-10 py-20 sm:px-5 md:flex-row flex-col items-center">
        <div className="lg:flex-grow flex flex-col md:text-center mb-16 md:mb-0 items-center text-center">
        
          <h1 className="title-font-only sm:text-3xl text-2xl mb-4 font-medium resbluetext">
            A bit about me.<img className="ml-5 w-7 mb-4 inline " src="./blackflower.PNG" alt="Just a pretty divider flower!"/>
            <br className="lg:inline-block" />
          </h1>
          <img src="three.jpg" class="w-1/3"/>
          <div className="text-xl lg:p-10 mb-8 leading-relaxed rounded-xl border md:w-2/3 lg:w-2/3 sm:w-full" id="aboutbox">
          <p>
          Well, it's not <i>entirely</i> tech hobbies.</p><br className="inline-block"/><p> I'm a massive NFL geek, I root Dallas but that's sort of secondary to what fascinates me about the sport. I did learn R so I could keep track of each time a player gained his jersey number in yards on a play.</p><br className="inline-block"/><p>Last year's leader was Chase Edmonds. 29 yards. Still waiting on Aaron Donald's endzone pick-six.
          </p><br/>
          <p>
          I'm a dedicated doer and maker of crosswords, a constant composer of music with too many chord changes, and a 3D art hobbyist. I keep a DIY recording studio upstate so these parts of my life can have their dedicated time.
          </p><br/>
          <p>
          The other side of my professional life is mixing recorded and live music, as well teaching a range of instruments to a wide range of ages. My hope is to expose students to music via as many angles as possible, since (as with most art forms) all roads lead to the same weird amorphous place.
          </p><br/>
          <p>I'm also obligated to say that I keep a heavily customized Arch machine, or else they won't let me into the meetings. Sometimes it's the best tool, often it's the most fun!</p>
          <p><br/>
          But, in all, I'm just a learner. Addicted to the thrill of "Oh! I get it now".
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}