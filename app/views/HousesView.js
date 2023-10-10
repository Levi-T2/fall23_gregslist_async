
export const HousesView = `
<div class="container-fluid">
<section class="row justify-content-center">
  <div class="col-8 p-2">
    <form onsubmit="app.HousesController.createHouse(event)">
      <div>
        <label for="year">Year</label>
        <input id="year" type="number" required min="100" max="2025" name="year">
      </div>
      <div>
        <label for="bedrooms">Bedrooms</label>
        <input id="bedrooms" type="number" required min="0" max="100" name="bedrooms">
      </div>
      <div>
        <label for="bathrooms">Bathrooms</label>
        <input id="bathrooms" type="number" required min="0" max="100" name="bathrooms">
      </div>
      <div>
        <label for="price">Price</label>
        <input id="price" type="number" required min="1" max="10000000" name="price">
      </div>
      <div>
        <label for="levels">Levels</label>
        <input id="levels" type="number" required min="1" max="10000000" name="levels">
      </div>
      <div>
        <label for="description">Description</label>
        <textarea id="description" type="text" required rows='5' minlength="3" maxlength="700"
          name="description"></textarea>
      </div>
      <div>
        <label for="imgUrl">Img Url</label>
        <input id="imgUrl" type="text" required minlength="4" maxlength="700" name="imgUrl">
      </div>
      <div class="p-3">
        <button class="btn  btn-success" type="submit">Submit Form</button>
      </div>
    </form>
  </div>
</section>
<section id="houseCards" class="row">
</section>
</div>

</section>


`