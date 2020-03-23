function process_form() {
    // get form object
    var fm = document.getElementById("my_form");
    // get output object
    var out1 = document.getElementById("photo");
    var out2 = document.getElementById("planttype");
    var out3 = document.getElementById("att");
    var out4 = document.getElementById("des");
    // instantiate  object
    var plant = new Plant(fm);
    // output result   
    out1.src = dimg[plant.sort()];
    out2.innerHTML = dname[plant.sort()];
    out3.innerHTML = datt[plant.sort()];
    out4.innerHTML = ddes[plant.sort()];
}

function Plant(fm) {
    // constructor
    this.input_owner = fm.input_owner.value;
    this.input_location = fm.input_location.value;
    this.input_pets = fm.input_pets.value;

    this.sort = function () {
        // sort result based on input
        if (this.input_owner == 'killer' && this.input_location == 'in' && this.input_pets == 'yes') {
            return 0; // killer of plants, inside, with pets
        } else if (this.input_owner == 'killer' && this.input_location == 'in' && this.input_pets == 'no') {
            return 1; // killer of plants, inside, no pets
        } else if (this.input_owner=='killer' && this.input_location=='out' && this.input_pets=='yes') {
            return 2; // killer, outside, with pets
        } else if (this.input_owner=='killer' && this.input_location=='out' && this.input_pets=='no') {
            return 3; // killer, outside, no pets
        } else if (this.input_owner=='killer' && this.input_location=='both' && this.input_pets=='yes') {
            return 4; // killer, indoor/outdoor, with pets
        } else if (this.input_owner=='killer' && this.input_location=='both' && this.input_pets=='no') {
            return 5; // killer, indoor/outdoor, no pets
        } else if (this.input_owner=='thumb' && this.input_location=='in' && this.input_pets=='yes') {
            return 6; // green thumb, inside, with pets
        } else if (this.input_owner=='thumb' && this.input_location=='in' && this.input_pets=='no') {
            return 7; // green thumb, inside, no pets
        } else if (this.input_owner=='thumb' && this.input_location=='out' && this.input_pets=='yes') {
            return 8; // green thumb, outside, with pets
        } else if (this.input_owner=='thumb' && this.input_location=='out' && this.input_pets=='no') {
            return 9; // green thumb, outside, no pets
        } else if (this.input_owner=='thumb' && this.input_location=='both' && this.input_pets=='yes') {
            return 10; // green thumb, indoor/outdoor, with pets
        } else if (this.input_owner=='thumb' && this.input_location=='both' && this.input_pets=='no') {
            return 11; // owned, house large yard, no kids
        }
    }
}

// Arrays
var dimg = [
	"./images/castiron.jpg", 
	"./images/cornplant.jpg", 
	"./images/lambsear.jpg", 
	"./images/daffodil.jpg", 
	"./images/fuchsia.jpg", 
	"./images/begonias.jpg", 
	"./images/mothorchid.jpg", 
	"./images/peacelily.jpg", 
	"./images/zebraplant.jpg", 
	"./images/azalea.jpg", 
	"./images/bostonfern.jpg", 
	"./images/fiddleleaffig.jpg",]
var dname = [
	"Cast Iron Plant", 
	"Corn Plant", 
	"Lambs Ear", 
	"Daffodil", 
	"Fuchsia", 
	"Begonias", 
	"Moth Orchid", 
	"Peace Lily", 
	"Zebra Plant", 
	"Azalea", 
	"Boston Fern", 
	"Fiddle Leaf Fig Tree"]
var datt = [
	"Easy and Low-Light, Non-toxic to Pets", 
	"Easy and Low-Light, Toxic to Pets", 
	"Easy and Drought-Tolerant, Non-toxic to Pets", 
	"Easy and Full Light, Toxic to Pets", 
	"Easy and Full Seasonal Light, Non-toxic to Pets",
	"Easy and Partial Light, Toxic to Pets", 
	"Advanced and Full Light, Non-toxic to Pets", 
	"Advanced and Low-Light, Toxic to Pets", 
	"Advanced and Low-Light, Non-toxic to Pets", 
	"Advanced and Partial-Light, Toxic to Pets", 
	"Advanced and Partial-Light, Non-toxic to Pets", 
	"Advanced and Partial-Light, Toxic to Pets"]
var ddes = [
	"The cast iron plant is one of the easiest house plants I have come across to care for. While this species does prefer bright light it survives well in shaded spots and rooms lacking natural light. The main way a grower can harm this plant is by over-watering or re-potting too often, so for those that forget about watering and care will love the aspidistra elatior (botanical name).", 
	"Another favorite for many households and offices is the corn plant that looks outstanding as a focal point within a large sized room. This plant will grow best in bright light conditions, but it tolerates low light as well. Like other dracaenas it's a slow growing plant that tolerates neglect. Worst things to do is over water, sit it in direct sun for too long or let it get too cold.", 
	"Lamb's ear (Stachys byzantina) is regarded mainly as a foliage plant. Not only are its leaves a pretty, silvery color, but they are also pleasing to the touch (velvety soft). The low-care features of this perennial include the fact that it is a drought-tolerant plant.", 
	"Long-lived daffodils are one of the easiest to grow and most popular spring flowering bulbs. If you think you know all about daffodils, consider that there are more than 50 species and more than 25,000 registered cultivars or hybrids. There is more to daffodils than the pretty yellow trumpet flowers that cheer up the spring landscape.", 
	"Fuchsias look very tropical, but they actually enjoy cool temperatures in the 60 to 70 F range. This plant benefits from a winter rest, so do not expect a lot of flowers during winter. Bring the plants indoors before frost and trim them to about 6 inches. Place it a cool spot (45 to 50 degrees Fahrenheit) with low light. In spring, move the plant back into a sunny spot and resume watering regularly. New growth should start soon. Repot with fresh soil and begin feeding every other week.", 
	"Begonias are becoming more popular with plant breeders and many varieties make excellent indoor foliage plants. In particular, rex begonias, with their unusual colors, patterns, and textures, will make nice houseplants. They can be difficult to grow indoors​ because they prefer high humidity, but growing them on a pebble tray helps.", 
	"Being a plant parent to moth orchids (also called Phalaenopsis) requires some patience. After blooming, these plants need time to regenerate before putting out another round of flowers. An orchid will drop its previous blooms so it can give all its energy to new flowers. With the right care, you can usually get it to rebloom two or three times a year, though the flowers might be a little smaller.", 
	"The peace lily definitely belongs to the low light house plants category, however, low natural light is likely to prevent the beautiful spathe from appearing. The foliage alone looks very attractive with it's glossy leaves produced from the slim stems. Most common house plants like the spathiphyllum are so popular because they're easy to grow.", 
	"Zebra plant (Aphelandra spp.) is a tropical plant from Brazil that is a widely admired and grown as in indoor houseplant, prized for its great foliage and showy flowers. Zebra plant's large, pointed leaves are a deep, glossy green with bright silvery veins that create a striped appearance. When the plant flowers, usually in the late summer or autumn, it bears a tall (eight inch) golden flower bract that lasts for up to six weeks. ", 
	"Nothing is more beautiful than an azalea shrub in spring bloom. These easy-care shrubs come in so many colors it’s hard to find one that doesn’t suit your needs. Azaleas can be grown in nearly any garden, instantly adding interest and color to drab areas.", 
	"This lush, leafy plant can give your home serious jungle vibes—as long as you can successfully mimic the growing conditions of its first home, the tropical and sub-tropical rainforests. Without warmer temperatures, high humidity, and lots of filtered light, a sad fern will shed its leaves.", 
	"All the rage in design circles for the past few years, the fiddle-leaf fig, which is actually a ficus, is beloved for its unusual silhouette. Despite its meteoric rise in popularity, the plant is surprisingly finicky and difficult to keep alive. Too much sun, and the leafs will brown and wither. Too little sun, and the plant will fail to thrive. And if you ever want to move it to the other side of the room? Think again: The fiddle-leaf fig adapts poorly to changes in its environment."]