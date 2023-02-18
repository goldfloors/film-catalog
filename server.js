const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors())




const data= {
    "page": 1,
    "results": [
        {
            "adult": false,
            "backdrop_path": "/rFWMhQvv7J4ZFd55j0YXxROuJAX.jpg",
            "genre_ids": [
                18,
                53
            ],
            "id": 37951,
            "original_language": "hi",
            "original_title": "Raajneeti",
            "overview": "It is the story of a fiercely fought election campaign, where money power and corruption are the accepted norms, and where treachery and manipulation are routinely used weapons. As the personal drama of these conflict-ridden characters unfolds against this gritty backdrop, love and friendship become mere baits, and relationships get sacrificed at the altar of political alignments. The darkness that rises from their souls threatens to envelope all that they hold precious. Until eventually, in the crescendo of increasing violence, the line between good and evil blurs, making it impossible to distinguish heroes from villains. Raajneeti is the story of Indian democracy. And its ugly underside. It is about politics. And beyond.",
            "popularity": 4.746,
            "poster_path": "/bZJeKk1vzekp2xfGecwYoUZGzoB.jpg",
            "release_date": "2010-06-04",
            "title": "Raajneeti",
            "video": false,
            "vote_average": 6.2,
            "vote_count": 62
        },
        {
            "adult": false,
            "backdrop_path": "/etTUz6C0jTC6uRwTJCYM7NOGidw.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 38031,
            "original_language": "en",
            "original_title": "You Will Meet a Tall Dark Stranger",
            "overview": "Two married couples find only trouble and heartache as their complicated lives unfold. After 40 years of marriage, Alfie leaves his wife to pursue what he thinks is happiness with a call girl. His wife, Helena, reeling from abandonment, decides to follow the advice of a psychic. Sally, the daughter of Alfie and Helena, is unhappy in her marriage and develops a crush on her boss, while her husband, Roy, falls for a woman engaged to be married.",
            "popularity": 10.244,
            "poster_path": "/oBhnI8UZQzTkAH1LMEtrBUmfpjS.jpg",
            "release_date": "2010-05-23",
            "title": "You Will Meet a Tall Dark Stranger",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 753
        },
        {
            "adult": false,
            "backdrop_path": "/qT4dbhmVkJKAX1nvVkYmZxoO6xJ.jpg",
            "genre_ids": [
                27,
                53
            ],
            "id": 38033,
            "original_language": "en",
            "original_title": "Chain Letter",
            "overview": "Six friends receive a mysterious chain letter via text messaging and in their email accounts from a maniac who's hunting down teenagers who fail to forward his online chain letter. Who knew they should take the threats in the chain letter seriously? Or that chain letters using the teens' favorite technologies to track them can kill? This maniacal game pits friend against friend as they race to beat rules that seem impossible to escape. Break the chain, lose a life. Do you pass it on? Does friendship mean anything?",
            "popularity": 6.62,
            "poster_path": "/Qkz89qeK3gJh49x3T85KiecTZi.jpg",
            "release_date": "2010-10-01",
            "title": "Chain Letter",
            "video": false,
            "vote_average": 4.4,
            "vote_count": 107
        },
        {
            "adult": false,
            "backdrop_path": "/waIZRQ9mw497jmN0mAQOS5b4oR3.jpg",
            "genre_ids": [
                16,
                28,
                35,
                10751,
                878
            ],
            "id": 38055,
            "original_language": "en",
            "original_title": "Megamind",
            "overview": "Bumbling supervillain Megamind finally defeats his nemesis, the superhero Metro Man. But without a hero, he loses all purpose and must find new meaning to his life.",
            "popularity": 42.889,
            "poster_path": "/uZ9ytt3sPTx62XTfN56ILSuYWRe.jpg",
            "release_date": "2010-10-28",
            "title": "Megamind",
            "video": false,
            "vote_average": 6.9,
            "vote_count": 5999
        },
        {
            "adult": false,
            "backdrop_path": "/yIG329hXOMJq1O1O2ubd9xoweHm.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 38073,
            "original_language": "en",
            "original_title": "Going the Distance",
            "overview": "Erin and Garrett are very much in love. When Erin moves to San Francisco to finish her journalism degree and Garrett stays behind in New York to work in the music industry, they gamely keep the romance alive with webcams and frequent-flyer miles. But just when it seems the lovers will soon be reunited, they each score a big break that could separate them for good.",
            "popularity": 9.809,
            "poster_path": "/tTllmSew3nsizpzWNWKUkOuANhm.jpg",
            "release_date": "2010-08-27",
            "title": "Going the Distance",
            "video": false,
            "vote_average": 6.1,
            "vote_count": 641
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                35
            ],
            "id": 38085,
            "original_language": "en",
            "original_title": "Alex Agnew: More Human Than Human",
            "overview": "Na de dvd's 'Kaboom!' en de snoeiharde bevestiging met 'Morimos Solamente' is Alex Agnew toe aan zijn derde stand-up-comedy-theaterregistratie DVD: 'More Human Than Human'.Agnew is uniek. Grover, gewaagder en vooral grappiger dan ooit. Geen enkel onderwerp is veilig. Lichtgeraakte mensen wezen gewaarschuwd: Alex Agnew balanceert altijd op het randje. Wie de Alex Agnew verwacht die geluidjes maakt, zal verrast zijn. Agnew speelt meer in op het publiek, brengt vaak meer doordachte humor en beperkt de human jukebox tot het minimum.Alex Agnew heeft één van de belangrijkste eigenschappen van een goede stand-up: charisma. Die sympathieke uitstraling in combinatie met zijn geniaal materiaal drijft het publiek keer op keer en in een razend snel tempo naar opeenvolgende lachsalvo's die pas stoppen als hij met een buiging het podium verlaat, wat gepaard gaat met een daverend applaus.",
            "popularity": 0.811,
            "poster_path": "/AgSU2xRnOzJ0EVPznis2yEKXdnK.jpg",
            "release_date": "2010-05-21",
            "title": "Alex Agnew: More Human Than Human",
            "video": false,
            "vote_average": 6.3,
            "vote_count": 6
        },
        {
            "adult": false,
            "backdrop_path": "/z3XieQjXfT63WiKvlJACbOxxFYn.jpg",
            "genre_ids": [
                35,
                18,
                10749
            ],
            "id": 38093,
            "original_language": "en",
            "original_title": "Just Wright",
            "overview": "A physical therapist falls for the basketball player she is helping recover from a career-threatening injury.",
            "popularity": 12.957,
            "poster_path": "/qx1SumoTQYtB9VyxQ7irlfE2e7L.jpg",
            "release_date": "2010-05-14",
            "title": "Just Wright",
            "video": false,
            "vote_average": 6.4,
            "vote_count": 334
        },
        {
            "adult": false,
            "backdrop_path": "/x8tzywln22VRCaBy58lPF0UJVCX.jpg",
            "genre_ids": [
                28,
                878,
                53
            ],
            "id": 37816,
            "original_language": "en",
            "original_title": "Dark Island",
            "overview": "After losing contact with its researchers on a remote island, a military corporation hires a group of scientists and soldiers to find out what went wrong. But when they arrive, the team quickly discovers that the weapons testing performed on the island has unleashed and powerful and deadly entity that will stop at nothing to destroy them all.",
            "popularity": 3.939,
            "poster_path": "/s2eTKF5WxgTUtGU3HBGcCFUqE8a.jpg",
            "release_date": "2010-05-22",
            "title": "Dark Island",
            "video": false,
            "vote_average": 4.1,
            "vote_count": 17
        },
        {
            "adult": false,
            "backdrop_path": "/rTxTqBJ3tawnkFrqfmCS8gZxE2D.jpg",
            "genre_ids": [
                28,
                35,
                53,
                10749
            ],
            "id": 37821,
            "original_language": "en",
            "original_title": "Killers",
            "overview": "When an elite assassin marries a beautiful computer whiz after a whirlwind romance, he gives up the gun and settles down with his new bride. That is, until he learns that someone from his past has put a contract out on his life.",
            "popularity": 17.06,
            "poster_path": "/o3nIJ5n4Qx74msRkP0FVaK6dx5z.jpg",
            "release_date": "2010-10-04",
            "title": "Killers",
            "video": false,
            "vote_average": 6,
            "vote_count": 1950
        },
        {
            "adult": false,
            "backdrop_path": "/k37cLLE0xPVWbfBjyF33JKqDQo8.jpg",
            "genre_ids": [
                80
            ],
            "id": 37822,
            "original_language": "hi",
            "original_title": "बदमाश कंपनी",
            "overview": "Four young friends decide to work together when one of them comes up with an innovative and lucrative business plan. But their lives begin to deteriorate when their personal issues surface.",
            "popularity": 4.571,
            "poster_path": "/bz1nDlkhUN1XB9rERhN1jYRe4ka.jpg",
            "release_date": "2010-05-07",
            "title": "Badmaash Company",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 43
        },
        {
            "adult": false,
            "backdrop_path": "/eje6RaOBEPlPuiuX4TDwug8XXDd.jpg",
            "genre_ids": [
                99,
                10752
            ],
            "id": 37828,
            "original_language": "da",
            "original_title": "Armadillo",
            "overview": "Danish soldiers are sent to Afghanistan in 2009 for 6 months, to help stabilize the country against the Taliban. They're stationed on Armadillo military base in Helman province. Unlike other war movies, this is the real deal - no actors.",
            "popularity": 6.108,
            "poster_path": "/aezjTpjt0sdQV9X8XiSH2oHWEt7.jpg",
            "release_date": "2010-05-27",
            "title": "Armadillo",
            "video": false,
            "vote_average": 7,
            "vote_count": 97
        },
        {
            "adult": false,
            "backdrop_path": "/t4IKPM6Kd1hWG4MxSxoqMU3xszD.jpg",
            "genre_ids": [
                35
            ],
            "id": 37832,
            "original_language": "fr",
            "original_title": "Mammuth",
            "overview": "Serge Pilardosse has just turned 60. He has worked since the age of 16, never unemployed, never sick. But the hour of retirement has come, and it is disillusionment: he is missing points, some employers having forgotten to declare it! Pushed by Catherine, his wife, he gets on his old motorcycle from the 70s, a \"Mammut\" which earned him his nickname, and sets off in search of his pay slips. During his journey, he rediscovers his past and his quest for administrative documents soon becomes incidental...",
            "popularity": 5.946,
            "poster_path": "/f19wwAy4q1oAmGRBLvxRIq3bvd1.jpg",
            "release_date": "2010-04-21",
            "title": "Mammuth",
            "video": false,
            "vote_average": 5.8,
            "vote_count": 131
        },
        {
            "adult": false,
            "backdrop_path": "/grHeT4GGDmVcreyuS0D53DlFD5p.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 37834,
            "original_language": "en",
            "original_title": "Knight and Day",
            "overview": "A fugitive couple goes on a glamorous and sometimes deadly adventure where nothing and no one – even themselves – are what they seem. Amid shifting alliances and unexpected betrayals, they race across the globe, with their survival ultimately hinging on the battle of truth vs. trust.",
            "popularity": 29.084,
            "poster_path": "/a7JmOBMNj5erYTgt4u1mQgvHItu.jpg",
            "release_date": "2010-06-15",
            "title": "Knight and Day",
            "video": false,
            "vote_average": 6.2,
            "vote_count": 3948
        },
        {
            "adult": false,
            "backdrop_path": "/wqtVc0ypodo6SzbNfM35wgkQbsr.jpg",
            "genre_ids": [
                28,
                878
            ],
            "id": 37851,
            "original_language": "ru",
            "original_title": "На игре 2: Новый уровень",
            "overview": "The continuation of the adventures of the heroes of \"Hooked on the Game\".",
            "popularity": 3.363,
            "poster_path": "/9lfPXxJ2M6YhqpPmiOxCXjbozwU.jpg",
            "release_date": "2010-04-15",
            "title": "Hooked on the Game 2. The Next Level",
            "video": false,
            "vote_average": 5.3,
            "vote_count": 36
        },
        {
            "adult": false,
            "backdrop_path": null,
            "genre_ids": [
                28,
                80,
                53
            ],
            "id": 37860,
            "original_language": "en",
            "original_title": "D.C. Sniper",
            "overview": "A mysterious shooter randomly kills innocent citizens in public; one after the other in broad daylight. All murders happen not far from the White House; not far from the President.",
            "popularity": 2.266,
            "poster_path": "/367RDbrBtjyqGcc0OA8uVHPF1fX.jpg",
            "release_date": "2010-01-01",
            "title": "D.C. Sniper",
            "video": false,
            "vote_average": 1.9,
            "vote_count": 6
        },
        {
            "adult": false,
            "backdrop_path": "/6HzWHiygvz3gofphxO7zcAvgkCp.jpg",
            "genre_ids": [
                28,
                27,
                53
            ],
            "id": 37905,
            "original_language": "fr",
            "original_title": "La Horde",
            "overview": "A bunch of crooked cops raid a ruined building located in an impoverished suburb of Paris, determined to furiously avenge the death of one of them, murdered by the ruthless criminal gang hidden on top of the dark labyrinth that will become a deathly trap when the living, unexpectedly turned into the undead by a mysterious plague, begin to devour the world.",
            "popularity": 8.281,
            "poster_path": "/c3sYdfCg1vz6DG4XlQRpu8baxvM.jpg",
            "release_date": "2010-02-10",
            "title": "The Horde",
            "video": false,
            "vote_average": 5.9,
            "vote_count": 360
        },
        {
            "adult": false,
            "backdrop_path": "/j8OUo2gF49U0MnmgFvXU1zzIDcT.jpg",
            "genre_ids": [
                99,
                10402
            ],
            "id": 37925,
            "original_language": "en",
            "original_title": "Celine: Through the Eyes of the World",
            "overview": "A documentary–concert film chronicling the life of Canadian singer, Celine Dion during her 2008–2009 Taking Chances World Tour.",
            "popularity": 1.859,
            "poster_path": "/9F9XhXGbJD8s3N2uYyv9Qmmv8Cr.jpg",
            "release_date": "2010-02-17",
            "title": "Celine: Through the Eyes of the World",
            "video": false,
            "vote_average": 7.3,
            "vote_count": 16
        },
        {
            "adult": false,
            "backdrop_path": "/cRNN5T9TZycViR5wvyfo7V5NgUb.jpg",
            "genre_ids": [
                28,
                35
            ],
            "id": 37931,
            "original_language": "en",
            "original_title": "MacGruber",
            "overview": "Ex-special operative MacGruber is called back into action to take down his archenemy, Dieter Von Cunth, who's in possession of a nuclear warhead and bent on destroying Washington, DC.",
            "popularity": 8.905,
            "poster_path": "/9cO8JD7aaQzI4q8lBS8MYXH8LrJ.jpg",
            "release_date": "2010-05-21",
            "title": "MacGruber",
            "video": false,
            "vote_average": 5.5,
            "vote_count": 467
        },
        {
            "adult": false,
            "backdrop_path": "/qJ1TKRNpajzufU7nXNcaSAnR6aC.jpg",
            "genre_ids": [
                10751,
                18
            ],
            "id": 37932,
            "original_language": "en",
            "original_title": "Flicka 2",
            "overview": "Carrie is a big-city teenager whose life is turned upside down when she moves to a horse ranch in Wyoming to live with her father. But everything changes when Carrie meets Flicka, a wild, jet-black mustang who's just as free-spirited and strong-willed as Carrie. The two form a special bond and Carrie opens her heart to her father and a handsome, local boy, but when a jealous rival puts Flicka's life in jeopardy, Carrie must do whatever it takes to save her best friend.",
            "popularity": 7.023,
            "poster_path": "/9fon68TdGTlcgVmHe0arPLnEvc6.jpg",
            "release_date": "2010-05-04",
            "title": "Flicka 2",
            "video": false,
            "vote_average": 6.8,
            "vote_count": 92
        },
        {
            "adult": false,
            "backdrop_path": "/hGBleDZsJGo0epp50ekddIz9cvN.jpg",
            "genre_ids": [
                18,
                10749
            ],
            "id": 37941,
            "original_language": "ta",
            "original_title": "விண்ணைத்தாண்டி வருவாயா",
            "overview": "A young, aspiring filmmaker falls in love with a girl who moves into the house above his, but her sophisticated nature does more harm than good to him.",
            "popularity": 3.12,
            "poster_path": "/icWUNL2GxDgWmI5PQN2RYA2CEbv.jpg",
            "release_date": "2010-02-26",
            "title": "Vinnaithaandi Varuvaayaa",
            "video": false,
            "vote_average": 7.6,
            "vote_count": 47
        }
    ],
    "total_pages": 714,
    "total_results": 14276
}


app.use(express.json());
app.use(express.urlencoded({extended:true}));

const { PORT = 4000 } = process.env;

app.listen(PORT, () => {
  console.log(`Users are ready at http://localhost:${PORT}`);
});

app.get('/api/movies', async (req, res, next) => {
  try {
    res.send(data);
  } catch (error) {
    console.error(error);
    next(error)
  }
});



module.exports = app;