import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './App.css';

function App() {
 return(
  <div>
   <Nav/>
   <Hero/>
   <About/>
   <Food/>
   <Locations/>
   <Attractions/>
   <Travel/>
   <Footer/>
  </div>
  ) 
}

 class Nav extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      menuDisplayed: false
    }
    this.handleMenu = this.handleMenu.bind(this);
  }

  handleMenu(){
   let menu = Array.from(document.getElementsByTagName("li")).slice(1,6);
   this.state.menuDisplayed ? this.setState({ menuDisplayed: false}) : this.setState({ menuDisplayed: true});
   menu.map(i => this.state.menuDisplayed ? i.classList.remove("mobile-li") : i.classList.add("mobile-li"));
  }

  render(){
  return(
     <nav>
      <ul id="navbar">
       <li id="mobile-menu" onClick={this.handleMenu}><i className="fas fa-bars"></i></li>
       <li className="mobile-li"><a href="#about">About</a></li>
       <li className="mobile-li"><a href="#food">Food</a></li>
       <li className="mobile-li"><a href="#akihabara">Locations</a></li>
       <li className="mobile-li"><a href="#gallery">Attractions</a></li>
       <li className="mobile-li"><a href="#travel">Travel</a></li>
      </ul>
     </nav>
   )
  }
 }

function Hero(){
  return(
   <div className="background">
    <h1>Tokyo /<span id="kanji">/ 東京</span></h1>
   </div>
  )
}

function About(){
  return(
   <div id="about">
    <div id="overlay">
     <div id="inner-border">
    <h2>About Tokyo</h2>
    <p>&nbsp; Tokyo (東京, Tōkyō) is Japan's capital and the world's most populous metropolis. It is also one of Japan's 47 prefectures,
     consisting of 23 central city wards and multiple cities, towns and villages west of the city center. The Izu and Ogasawara 
     Islands are also part of Tokyo.</p>

     <p>&nbsp; Tokyo offers a seemingly unlimited choice of shopping, entertainment, culture and dining to its visitors. The city's 
     history can be appreciated in districts such as Asakusa and in many excellent museums, historic temples and gardens. 
     Contrary to common perception, Tokyo also offers a number of attractive green spaces in the city center and within 
     relatively short train rides at its outskirts.</p>
      </div>
     </div>
   </div>
  )
}

function Food(){
  return(
   <div id="food">
    <div id="food-area">
      <p>Tokyo is one of the world's most exciting dining destinations. The city features a wide range of both local and 
     regional Japanese cuisine in addition to all types of international fare. Its top restaurants have accrued more 
     Michelin stars than both Paris and New York combined. But good food can be found at every price range from cheap 
     hole-in-the-wall joints to expensive high-class restaurants with every budget in between.</p>
     <img src="https://bit.ly/2XP5OmN" alt="Tokyo street with restaurants"/>
    </div>

    <div id="food-list">
     <div className="food-item">
      <img src="https://bit.ly/2LyaxCY" alt="Sushi"/>
      <div id="sushi">
      <p className="food-name">Sushi <span className="japanese">寿司</span></p>
      <p className="food-info">
      Sushi (寿司 or 鮨) is the most famous Japanese dish outside of Japan, and one of the most popular dishes among the Japanese. In Japan, sushi is usually enjoyed on special occasions, such as a celebration.

 In past centuries, "sushi" referred to pickled fish preserved in vinegar. Nowadays sushi can be defined as a dish containing rice which has been prepared with sushi vinegar. </p>
      </div>
     </div>
     <div className="food-item">
      <img src="https://bit.ly/2O6vqqG" alt="Ramen"/>
      <div className="ramen">
      <p className="food-name">Ramen <span className="japanese">ラーメン</span></p>
      <p className="food-info">
       Ramen (ラーメン) is a noodle soup dish that was originally imported from China and has become one of the most popular dishes in Japan in recent decades. Ramen are inexpensive and widely available, two factors that also make them an ideal option for budget travelers. Ramen restaurants, or ramen-ya, can be found in virtually every corner of the country and produce countless regional variations of this common noodle dish.
      </p>
      </div> 
     </div>
     <div className="food-item">
     <img src="https://bit.ly/2M8Rxdo" alt="Tempura"/>
     <div id="tempura" >
      <p className="food-name">Tempura <span className="japanese">天ぷら</span></p>
       <p className="food-info">
        Tempura (天ぷら) are pieces of lightly battered, deep fried seafood and vegetables. Introduced to Japan during the 16th century by the Portuguese, tempura has developed over the centuries into a popular Japanese dish both inside and outside of Japan. Tempura can be found in many types of restaurants across the country, where it is commonly served as a main dish, side dish or as a topping for tendon rice bowls, or udon and soba noodle dishes. 
       </p>
      </div>
     </div>
     <div className="food-item">
     <img src="https://bit.ly/2Lx6pTw" alt="Japanese sweets"/>
     <div id="sweets">
      <p className="food-name">Sweets <span className="japanese">和菓子</span></p>
       <p className="food-info">
        Wagashi (和菓子) are traditional Japanese sweets that are typically enjoyed in combination with a cup of green tea. They are made in a wide variety of shapes and consistencies and with diverse ingredients and preparation methods. Some are popular across the country and around the year while others are only available regionally or seasonally. Sweet azuki bean paste (anko) is a central ingredient in a large number of Japanese sweets.
       </p>
      </div>
     </div>
    </div>
  </div>
 )
}

 function Locations(){
  return (
   <Carousel infiniteLoop={true}>
     <div id="akihabara">
            <img src="https://bit.ly/2Z5xYXj" alt="Akihabara area of Tokyo" />
            <div className="area">
              <p className="title">Akihabara</p>
              <div className="area-info">
                Akihabara (秋葉原), also called Akiba after a former local
                shrine, is a district in central Tokyo that is famous for its
                many electronics shops. In more recent years, Akihabara has
                gained recognition as the center of Japan's otaku (diehard fan)
                culture, and many shops and establishments devoted to anime and
                manga are now dispersed among the electronic stores in the
                district.
              </div>
            </div>
          </div>
          <div id="shinjuku">
            <img src="https://bit.ly/2JYMhGH" alt="Shinjuku area of Tokyo" />
            <div className="area">
              <p className="title">Shinjuku</p>
              <div className="area-info">
                Shinjuku (新宿) is one of the 23 city wards of Tokyo, but the
                name commonly refers to just the large entertainment, business
                and shopping area around Shinjuku Station. Shinjuku Station is
                the world's busiest railway station, handling more than two
                million passengers every day.{" "}
              </div>
            </div>
          </div>
          <div id="shibuya">
            <img src="https://bit.ly/2Z4iC5j" alt="Shibuya area of Tokyo" />
            <div className="area">
              <p className="title">Shibuya</p>
              <div className="area-info">
                Shibuya (渋谷) is one of the twenty-three city wards of Tokyo,
                but often refers to just the popular shopping and entertainment
                area found around Shibuya Station. In this regard, Shibuya is
                one of Tokyo's most colorful and busy districts, packed with
                shopping, dining and nightclubs serving swarms of visitors that
                come to the district everyday. Shibuya is a center for youth
                fashion and culture, and its streets are the birthplace to many
                of Japan's fashion and entertainment trends.{" "}
              </div>
            </div>
          </div>
          <div id="ginza">
            <img src="https://bit.ly/2YvHFkU" alt="Ginza area of Tokyo" />
            <div className="area">
              <p className="title">Ginza</p>
              <div className="area-info">
                The Ginza (銀座) is Tokyo's most famous upmarket shopping,
                dining and entertainment district, featuring numerous department
                stores, boutiques, art galleries, restaurants, night clubs and
                cafes. One square meter of land in the district's center is
                worth over ten million yen, making it one of the most expensive
                real estate in Japan. It is where you can find the infamous $10
                cups of coffee and where virtually every leading brand name in
                fashion and cosmetics has a presence.
              </div>
            </div>
          </div>
    </Carousel>
   );
  }

function Attractions(){
 return(
   <div id="gallery">
    <div className="attractions">
     <img src="https://bit.ly/2JWknw5" alt="Imperial Palace"/>
     <p className="attraction-name">Imperial Palace</p>
     <div className="info-hover"><p>The current Imperial Palace (皇居, Kōkyo) is located on the former site of Edo Castle, 
     a large park area surrounded by moats and massive stone walls in the center of Tokyo, a short walk from Tokyo Station.
     It is the residence of Japan's Imperial Family.</p></div>
    </div>
    <div className="attractions">
     <img src="https://bit.ly/2JZdOJo" alt="Meiji Shrine"/>
     <p className="attraction-name">Meiji Shrine</p>
     <div className="info-hover"><p>Meiji Shrine (明治神宮, Meiji Jingū) is a shrine dedicated to the deified spirits of Emperor 
     Meiji and his consort, Empress Shoken. Located just beside the JR Yamanote Line's busy Harajuku Station, Meiji Shrine
    and the adjacent Yoyogi Park make up a large forested area within the densely built-up city. The spacious shrine grounds 
    offer walking paths that are great for a relaxing stroll.</p></div>
    </div>
    <div className="attractions">
     <img src="https://bit.ly/2OQXz5a" alt="Tokyo Tower"/>
     <p className="attraction-name">Tokyo Tower</p>
     <div className="info-hover"><p>Standing 333 meters high, Tokyo Tower (東京タワー) is the world's 
     tallest, self-supported steel tower and 13 meters taller than its model, the Eiffel Tower. A symbol of Japan's 
     post-war rebirth as a major economic power, Tokyo Tower was the country's tallest structure from its completion 
     in 1958 until 2012 when it was surpassed by the Tokyo Skytree.</p></div>
    </div>
    <div className="attractions">
     <img src="https://bit.ly/2yncnxE" alt="Shinjuku Gyoen"/>
     <p className="attraction-name">Shinjuku Gyoen</p>
     <div className="info-hover"><p>Shinjuku Gyoen (新宿御苑) is one of Tokyo's largest and most popular parks. Located just a short 
     walk from Shinjuku Station, the paid park's spacious lawns, meandering walking paths and tranquil scenery provide 
     a relaxing escape from the busy urban center around it. In spring Shinjuku Gyoen becomes one of the best places in 
     the city to see cherry blossoms.</p></div>
    </div>
    <div className="attractions">
     <img src="https://bit.ly/2LM77MU" alt="Miraikan Science Museum"/>
     <p className="attraction-name">Miraikan Science Museum</p>
     <div className="info-hover"><p>In addition to exhibitions that providing people with a chance to enjoy hands-on contact with
      science and technology, Miraikan's colorful line-up of offerings includes experienced based classes, and talks. 
      Visitors can experience the technological progress of today, from simple day-to-day questions, to the latest technologies,
      the global environment, space exploration and life science.</p></div>
    </div>
    <div className="attractions">
     <img src="https://bit.ly/2K2MbPH" alt="Ueno Park"/>
     <p className="attraction-name">Ueno Park</p>
     <div className="info-hover"><p>Ueno Park (上野公園, Ueno Kōen) is a large public park next to Ueno Station in central Tokyo. Ueno Park 
     is famous for the many museums found on its grounds, especially the Tokyo National Museum, the National Museum for Western Art, 
     the Tokyo Metropolitan Art Museum and the National Science Museum. It is also home to Ueno Zoo, Japan's first zoological garden.</p> </div>
    </div>
   </div>
  )
}

function Travel() {
    return(
   <div id="travel">
      <div className="travel-area">
       <p className="travel-title"><i className="fas fa-plane"></i>Flights</p>
       <p className="travel-info">Tokyo has two airports: Narita Airport handles the majority of international flights and only a small number of domestic flights. It is located 60 kilometers outside of central Tokyo. The more centrally located Haneda Airport handles a smaller number of international flights and the majority of domestic flights.</p>
      </div>
      <div className="travel-area">
       <p className="travel-title"><i className="fas fa-subway"></i>Train & Bus</p>
       <p className="travel-info">Tokyo is covered by a dense network of train, subway and bus lines, which are operated by about a dozen different companies. The train lines operated by JR East and the subway lines are most convenient for moving around central Tokyo.
Tokyo's most prominent train line is the JR Yamanote Line, a loop line which connects Tokyo's multiple city centers. The city's 13 subway lines are operated by two companies and run largely inside the Yamanote circle and the areas around Ginza and the area east of the loop line. Most of the many suburban train lines commence at one of the six major stations of the Yamanote Line (Tokyo, Ueno, Ikebukuro, Shinjuku, Shibuya and Shinagawa).</p>
    </div>
    <div className="travel-area">
       <p className="travel-title"><i className="fas fa-ticket-alt"></i>Tickets & Passes</p>
       <p className="travel-info">A large variety of rail passes exists in Japan, providing unlimited travel in a certain area, or a round trip to plus unlimited travel in a given region. Prepaid IC cards are generally the recommended way to get around Tokyo. Prepaid cards don't give you any discounts over single tickets, but they provide convenience as you can ride virtually any train or bus in Greater Tokyo (and many other major cities in Japan) with just a simple swipe over a card reader. They can also be used to make quick purchases at a constantly increasing number of shops in Tokyo (and across the country).</p>
    </div>
   </div>
  )
 }

 function Footer(){
  return(
   <footer id="footer">
    <p>Keep up with all the latest Tokyo info!</p>
    <div id="signup">
     <input type="email" placeholder=" Email..."/>
     <span><button>Subscribe</button></span>
    </div>
    <p>© 2019 Tokyo Travel</p>
   </footer>
  )
 }

export default App;
