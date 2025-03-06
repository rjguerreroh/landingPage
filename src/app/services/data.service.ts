import { Injectable } from "@angular/core";
import { CardData } from "../interfaces/data-card.interface";

@Injectable({
  providedIn: 'root'
})


export class DataService {

  cardData: CardData[] = [
    {
      title: "Lorem ipsum",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.",
      img: "img/card_img_3.jpeg"
    },
    {
      title: "Dolor sit amet",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.",
      img: "img/card_img_3.jpeg"
    },
    {
      title: "Consectetur adipiscing",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit posuere.",
      img: "img/card_img_3.jpeg"
    }
  ];

  getCardData(): CardData[] {
    return this.cardData;
  }

}