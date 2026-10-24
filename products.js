// ===== Add or change products here. Product photos go in the images folder. =====
const PRODUCTS = [
{n:"Garden Dream Big Bouquet",c:"Big Bouquets",d:"A big bouquet of sunflower, tulip and lilies in white wrap with a ribbon bow.",p:1449,u:"",o:"50% 62%",i:["images/p-n10.jpg"]},
{n:"Sunflower Bouquet",c:"Mini Bouquets",d:"One sunflower wrapped in clear paper and tied with a pink ribbon.",p:129,u:"",o:"",i:["images/p-16.jpg"]},
{n:"Red Rose Bouquet",c:"Mini Bouquets",d:"A soft red rose that never wilts, wrapped with a ribbon.",p:149,u:"",o:"",i:["images/p-17.jpg"]},
{n:"Pink Tulip Bouquet",c:"Mini Bouquets",d:"A pink tulip with leaves, wrapped as a gift.",p:139,u:"",o:"",i:["images/p-18.jpg"]},
{n:"Sunshine Pom-pom Mini Bouquet",c:"Mini Bouquets",d:"Yellow, white and red pom-pom flowers in a floral wrap with a pink ribbon.",p:120,u:"",o:"",i:["images/p-n1.jpg"]},
{n:"Tangerine Blossom Mini Bouquet",c:"Mini Bouquets",d:"Orange flowers with pearl centres and a pink ribbon.",p:120,u:"",o:"",i:["images/p-n2.jpg"]},
{n:"Pink Blush Mini Bouquet",c:"Mini Bouquets",d:"Pink flowers and a bud in soft pink wrap.",p:120,u:"",o:"",i:["images/p-n3.jpg"]},
{n:"Little Pink Tulip",c:"Mini Bouquets",d:"One pink tulip wrapped with a ribbon.",p:120,u:"",o:"",i:["images/p-n4.jpg"]},
{n:"Pink Lily Mini Bouquet",c:"Mini Bouquets",d:"Three pink lilies with green leaves.",p:120,u:"",o:"",i:["images/p-n5.jpg"]},
{n:"Ruby Red Mini Bouquet",c:"Mini Bouquets",d:"Red flowers with pearl centres.",p:120,u:"",o:"",i:["images/p-n6.jpg"]},
{n:"Lemon Drop Mini Bouquet",c:"Mini Bouquets",d:"Yellow flowers and a bud in a floral wrap.",p:120,u:"",o:"",i:["images/p-n8.jpg"]},
{n:"Lily Flower Clips",c:"Hair Clips",d:"Lily-style clips in yellow, red and pink.",p:119,u:"per piece",o:"",i:["images/p-4.jpg"]},
{n:"Red Pom-pom Clips",c:"Hair Clips",d:"Pearl-centred pom-pom clips on a floral card.",p:99,u:"2 pieces",o:"",i:["images/p-5.jpg"]},
{n:"Cherry Bow Clip",c:"Hair Clips",d:"Two red cherries with a green bow.",p:99,u:"2 pieces",o:"",i:["images/p-6.jpg"]},
{n:"Pink Flower Clips",c:"Hair Clips",d:"Pink flower and bow clips with pearl centres.",p:99,u:"2 pieces",o:"",i:["images/p-7.jpg"]},
{n:"Yellow Lily Clip",c:"Hair Clips",d:"A bright yellow lily clip with a red centre.",p:119,u:"",o:"",i:["images/p-2.jpg"]},
{n:"Daisy Dot Clip",c:"Hair Clips",d:"A white daisy clip with an orange centre.",p:99,u:"per piece",o:"",i:["images/p-n9.jpg"]},
{n:"Sunny Daisy Clips",c:"Hair Clips",d:"Yellow daisy clips with pearl centres on a floral card.",p:120,u:"per piece",o:"",i:["images/p-n11.jpg"]},
{n:"Colourful Clip Collection",c:"Hair Clips",d:"Orange, pink, yellow and red clips. Choose your colours.",p:0,u:"",o:"",i:["images/p-10.jpg"]},
{n:"Red Gerbera Stem Mirror",c:"Mirrors",d:"A red gerbera on one side, a mirror on the other. Tap Flip photo.",p:169,u:"",o:"",i:["images/p-14.jpg","images/p-13.jpg"]},
{n:"Sunny Bunny Mirror",c:"Mirrors",d:"A pink bunny and a smiling sunny mirror. Tap Flip photo to see more.",p:159,u:"",o:"",i:["images/p-15.jpg","images/p-n7.jpg"]},
{n:"Daisy in a Pot",c:"Flowers & Pots",d:"A white daisy in a small yellow and orange pot.",p:120,u:"",o:"",i:["images/p-11.jpg"]},
{n:"Orange Blossom Pot",c:"Flowers & Pots",d:"Orange flowers with green leaves in a striped pot.",p:149,u:"",o:"",i:["images/p-12.jpg"]}];

// ===== Customer reviews: add real ones, e.g. {name:"Name",stars:5,text:"Lovely bouquet!"} =====
const REVIEWS = [];
