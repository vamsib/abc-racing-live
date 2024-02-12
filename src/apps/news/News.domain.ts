export type NewsListItemImage = {
    sm1: {
        url: string;
        altText: string;
    },
    sm2: {
        url: string;
        altText: string;
    },
    md1: {
        url: string;
        altText: string;
    },
    md2: {
        url: string;
        altText: string;
    },
    lg1: {
        url: string;
        altText: string;
    },
    lg2: {
        url: string;
        altText: string;
    }
}

export type NewsListItem = {
    title: string;
    image: NewsListItemImage;
}

export function getNewsListing(): NewsListItem[] {
    const news = [
        {
          title: "Have your name on the Saudi Arabian Grand Prix Chequered Flag",
          image: {
            sm1: {
                url: "http://localhost:8080/racing-1-120x70.jpg",
                altText: "News - 1"
            },
            sm2: {
                url: "http://localhost:8080/racing-1-240x140.jpg",
                altText: "News - 1"
            },
            md1: {
                url: "http://localhost:8080/racing-1-488x284.jpg",
                altText: "News - 1"
            },
            md2: {
                url: "http://localhost:8080/racing-1-976x568.jpg",
                altText: "News - 1"
            },
            lg1: {
                url: "http://localhost:8080/racing-1-488x284.jpg",
                altText: "News - 1"
            },
            lg2: {
                url: "http://localhost:8080/racing-1-976x568.jpg",
                altText: "News - 1"
            },
        }
          
        },
        {
          title: "Everything you need to know about the 2024 F1 ACADEMY season",
          image: {
            sm1: {
                url: "http://localhost:8080/article120x70.png",
                altText: "News - 1"
            },
            sm2: {
                url: "http://localhost:8080/article240x140.png",
                altText: "News - 1"
            },
            md1: {
                url: "http://localhost:8080/article488x284.png",
                altText: "News - 1"
            },
            md2: {
                url: "http://localhost:8080/article976x568.png",
                altText: "News - 1"
            },
            lg1: {
                url: "http://localhost:8080/article488x284.png",
                altText: "News - 1"
            },
            lg2: {
                url: "http://localhost:8080/article976x568.png",
                altText: "News - 1"
            },
          }
        },
        {
          title:
            '"He\'s like an octopus" - Vowles names "most naturally talented" driver he has worked with',
            image: {
                sm1: {
                    url: "http://localhost:8080/article120x70.png",
                    altText: "News - 1"
                },
                sm2: {
                    url: "http://localhost:8080/article240x140.png",
                    altText: "News - 1"
                },
                md1: {
                    url: "http://localhost:8080/article488x284.png",
                    altText: "News - 1"
                },
                md2: {
                    url: "http://localhost:8080/article976x568.png",
                    altText: "News - 1"
                },
                lg1: {
                    url: "http://localhost:8080/article488x284.png",
                    altText: "News - 1"
                },
                lg2: {
                    url: "http://localhost:8080/article976x568.png",
                    altText: "News - 1"
                },
              }
        },
      ];
      return news;
} 