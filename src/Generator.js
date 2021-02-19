module.exports = () => {
    const data = { product_listings: [] }
    // Create 500 users
    const { v4: uuidv4 } = require('uuid');
    const vendors = ['Apple', 'Google', 'Samsung', 'Sony', 'Hitachi']
    for (let i = 0; i < 500; i++) {
      let id = uuidv4();
      let name = `Product ${i}`
      let description = `The this dummy description for ${name}. The product has a physical home button off the touch screen. The home screen has a list of buttons for the available applications.`
      let vendor = vendors[Math.floor(Math.random() * vendors.length)];
      let images = "https://www.telstra.com.au/content/dam/tcom/personal/mobile-phones/product-catalogue/telstra-tough-max-3/telstra-tough-max-3-blue-1.png"
      let price = `${i*2}`

      data.product_listings.push({ id, title: name, body_html: description, vendor , images , price})
    }
    return data
  }

  