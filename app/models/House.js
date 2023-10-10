import { AppState } from "../AppState.js"


export class House {
  constructor(data) {
    this.id = data.id
    this.imgUrl = data.imgUrl || ''
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt
    this.year = data.year
    this.price = data.price
    this.levels = data.levels
    this.description = data.description
    this.creatorId = data.creatorId
    this.creator = data.creator
  }

  get HouseCardTemplate() {
    return `       <div class="col-12 col-md-4">
        <div class="house-cards ">
          <img class="house-img"
            src="${this.imgUrl}">
          <p> Price: ${this.price} Yen</p>
          <p> Year: ${this.year}</p>
          <p> Bedrooms: ${this.bedrooms}</p>
          <p> Bathrooms: ${this.bathrooms}</p>
          <p> Levels: ${this.levels}</p>
          <p> Description: ${this.description}</p>
          <div class='align-items-center '>
          <img class='house-creator rounded-circle img-fluid' src='${this.creator.picture}'>
          <p>${this.creator.name}</p>
          </div class='text-end'>
          ${this.ComputeDeleteButton}
        </div>
      </div>`
  }

  get ComputeDeleteButton() {
    if (AppState.account?.id == this.creatorId) {
      return `
      <button onclick='app.HousesController.removeHouse("${this.id}")' class='btn btn-danger rounded-pill'>Delete?</button>
      `
    }
    return ''
  }

}