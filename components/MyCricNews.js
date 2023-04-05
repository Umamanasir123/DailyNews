import React, { Component } from 'react'
import NewsItem from './NewsItem'

let Cricarticles = [
    {
      "source": { "id": "news24", "name": "News24" },
      "author": "Khanyiso Tshwaku",
      "title": "Dane van Niekerk confirms Proteas retirement, ends stellar career on tumultuous note",
      "description": "Former Proteas women's captain Dane van Niekerk has officially announced her retirement from international cricket on Thursday.",
      "url": "https://www.news24.com/sport/cricket/proteas/dane-van-niekerk-confirms-proteas-retirement-ends-stellar-career-on-tumultuous-note-20230316",
      "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/7191/32c96390d6a34fde80368e0cccd8b8d5.jpg",
      "publishedAt": "2023-03-16T16:46:58+00:00",
      "content": "<ul><li>Former Proteas women's captain Dane van Niekerk has officially retired from international cricket, drawing the curtain on what was an illustrious career.</li><li>Van Niekerk has been at logge… [+2458 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
      "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
      "publishedAt": "2020-04-27T11:41:47Z",
      "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
    },
    {
      "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
      "author": null,
      "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
      "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
      "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
      "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
      "publishedAt": "2020-03-30T15:26:05Z",
      "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
    },
    {
        "source": { "id": "cnn", "name": "CNN" },
        "author": "George Ramsay",
        "title": "Mets closer Edwin Díaz suffers knee injury while celebrating World Baseball Classic win - CNN",
        "description": "Puerto Rico produced a big upset at the World Baseball Classic on Wednesday night with a 5-2 win against the Dominican Republic. But it came at a cost.",
        "url": "https://www.cnn.com/2023/03/16/sport/edwin-diaz-world-baseball-classic-injury-spt-intl/index.html",
        "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/230316081840-02-edwin-diaz-injury-0315.jpg?c=16x9&q=w_800,c_fill",
        "publishedAt": "2023-03-16T13:05:00Z",
        "content": "Puerto Rico produced a big upset at the World Baseball Classic on Wednesday night with a 5-2 win against the Dominican Republic. But it came at a cost.\r\nWhile celebrating the win with his teammates, … [+1310 chars]"
      },
      {
        "source": { "id": null, "name": "CBS Sports" },
        "author": null,
        "title": "2023 March Madness basketball bracket strategy: Model shares upsets, predictions for NCAA Tournament schedule - CBS Sports",
        "description": "SportsLine's model simulated the March Madness basketball bracket 2023 10,000 times and revealed NCAA Tournament upsets",
        "url": "https://www.cbssports.com/college-basketball/news/2023-march-madness-basketball-bracket-strategy-model-shares-upsets-predictions-for-ncaa-tournament-schedule/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2023/03/13/b3c8cf93-393f-41ba-8613-f5bc157a7abd/thumbnail/1200x675/b1970445ae5dee4fd2d025af7031e955/usatsi-202111851.jpg",
        "publishedAt": "2023-03-16T12:53:18Z",
        "content": "It would be a fitting conclusion to Houston's 2022-23 season to win a National Championship in their home city. The Cougars, 31-3, won the American Conference with ease in the regular season, but fel… [+3491 chars]"
      }
  ]
export class MyCricNews extends Component {
    constructor(){
        super();
        this.state={
            Cricarticles:this.Cricarticles,
            loading:false
        }
    }
  render() {
    return (
      
        <div className='container my-3' >
        <h2>Daily News - Top Cricket Headlines of the day</h2>
        <div className='row'>
        
        
          {Cricarticles.map((element)=>{

            return <div className='col-md-4' key={element.url}>
            <NewsItem  title={element.title.slice(0,40)} description={element.description.slice(0,88)} imageUrl={element.urlToImage} newsUrl={element.url}/>       
        </div>
        })}
        </div>

    
    </div>

    )
  }
}

export default MyCricNews
