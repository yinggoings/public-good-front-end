const products = [
  // {
  //   id: 1,
  //   name: "Gerber Good Start SoothePro Non-GMO Powder Infant Formula",
  //   brand: "Gerber",
  //   price: 29.99,
  //   available: true,
  //   quantity: 7,
  //   image:
  //     "https://target.scene7.com/is/image/Target/GUEST_1d31ad6f-ff97-4559-ad24-1bcc0e6de308",
  //   retailer: "Target",
  //   buyURL: "https://www.target.com/",
  // },
  // {
  //   id: 2,
  //   name: "Enfamil Gentlease Ready To Feed Infant Formula Bottle",
  //   brand: "Enfamil",
  //   price: 9.19,
  //   available: true,
  //   quantity: 11,
  //   image:
  //     "https://target.scene7.com/is/image/Target/GUEST_4e6608e1-dfa0-4950-8b5b-ecd2c675afa9",
  //   retailer: "Target",
  //   buyURL: "https://www.target.com/",
  // },
  // {
  //   id: 3,
  //   name: "Similac Advance Infant Formula with Iron, Powder",
  //   brand: "Similac",
  //   price: 17.46,
  //   available: true,
  //   quantity: 17,
  //   image:
  //     "https://i5.walmartimages.com/asr/fc4ec500-6fb4-481d-a4a6-6089e5a9952f.08b60e6fd1aeb3b47d41d129068c6b1e.png",
  //   retailer: "Walmart",
  //   buyURL: "https://www.walmart.com/",
  // },
  // {
  //   id: 4,
  //   name: "Gerber Good Start SoothePro Powder Infant Formula",
  //   brand: "Gerber",
  //   price: 36.48,
  //   available: false,
  //   quantity: null,
  //   image:
  //     "https://i5.walmartimages.com/asr/03468e8d-c033-4a86-b603-783f31b60d7b.dabe94896761f9ee5d2a0720161a0b94.jpeg",
  //   retailer: "Walmart",
  //   buyURL: "https://www.walmart.com/",
  // },
  // {
  //   id: 5,
  //   name: "Similac Advance Infant Formula with Iron, Powder",
  //   brand: "Similac",
  //   price: 17.46,
  //   available: true,
  //   quantity: 17,
  //   image:
  //     "https://i5.walmartimages.com/asr/fc4ec500-6fb4-481d-a4a6-6089e5a9952f.08b60e6fd1aeb3b47d41d129068c6b1e.png",
  //   retailer: "Walmart",
  //   buyURL: "https://www.walmart.com/",
  // },
  // {
  //   id: 6,
  //   name: "Gerber Good Start SoothePro Powder Infant Formula",
  //   brand: "Gerber",
  //   price: 89.99,
  //   available: false,
  //   quantity: null,
  //   image:
  //     "https://i5.walmartimages.com/asr/03468e8d-c033-4a86-b603-783f31b60d7b.dabe94896761f9ee5d2a0720161a0b94.jpeg",
  //   retailer: "Walmart",
  //   buyURL: "https://www.walmart.com/",
  // },
  // {
  //   id: 7,
  //   name: "Gerber Good Start SoothePro Non-GMO Powder Infant Formula",
  //   brand: "Gerber",
  //   price: 49.99,
  //   available: true,
  //   quantity: 7,
  //   image:
  //     "https://target.scene7.com/is/image/Target/GUEST_1d31ad6f-ff97-4559-ad24-1bcc0e6de308",
  //   retailer: "Target",
  //   buyURL: "https://www.target.com/",
  // },
  // {
  //   id: 8,
  //   name: "Enfamil Gentlease Ready To Feed Infant Formula Bottle",
  //   brand: "Enfamil",
  //   price: 9.19,
  //   available: true,
  //   quantity: 11,
  //   image:
  //     "https://target.scene7.com/is/image/Target/GUEST_4e6608e1-dfa0-4950-8b5b-ecd2c675afa9",
  //   retailer: "Target",
  //   buyURL: "https://www.target.com/",
  // },
  {
    id: 1,
    name: "Parent's choice advantage gmo-free powder baby formula",
    brand: "Parent's Choice",
    retailer: "Walmart",
    price: 69.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/30a3c609-c074-4ee8-a4b6-686d347ed157_1.d6340e68737493cd3bdcbc3325bbafa3.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Parent-s-Choice-Advantage-GMO-Free-Powder-Baby-Formula-35-oz-Tub-4/780084641",
    available: true,
  },
  {
    id: 2,
    name: "Concentrated liquid infant formula, milk-based baby formula",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 5.08,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/7a19ad3b-990e-490b-bb19-908a4744e793.8a98fd523d58d9888a00f877b2bceef4.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Concentrated-Liquid-Infant-Formula-Milk-based-Baby-Formula-with-Iron-Omega-3-DHA-Choline-13-Fl-Oz-Can/16940595",
    available: false,
  },
  {
    id: 3,
    name: "Infant formula, milk-based baby formula with iron",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 17.26,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/cd5ce214-d53f-4f8a-801f-eddfc6f73ec3.a182428262354c716b35fdd7e7fcb499.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Infant-Formula-Milk-based-Baby-Formula-with-Iron-Omega-3-DHA-Choline-Powder-Can-12-5-Oz/16940594",
    available: true,
  },
  {
    id: 4,
    name: "Gentle baby formula  -   super gentle formula", 
    brand: "Gerber Good Start",
    retailer: "Walmart",
    price: 34.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/d2e35b4b-489b-4277-bd86-6f43034726aa.db775c62efe6b6f71519604853d6a099.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Gerber-Good-Start-Gentle-Baby-Formula-with-2-FL-HMO-Probiotic-B-lactis-and-Iron-27-oz-Canister/1821810902",
    available: true,
  },
  {
    id: 5,
    name: "Infant formula, to reduce reflux & spit-up ",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 41.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/c02c6b8e-d0a5-450a-b664-170b60b86170.af9dca8f2abdbeccabbdee57e2342aa5.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-A-R-Infant-Formula-Clinically-Proven-to-Reduce-Reflux-Spit-Up-in-1-Week-with-Iron-DHA-Probiotics-Refill-Box-30-4-Oz/16940598",
    available: true,
  },
  {
    id: 6,
    name: "Sensitivity premium baby formula with iron",
    brand: "Parent's Choice",
    retailer: "Walmart",
    price: 23.48,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/60da2869-1139-4114-9bbd-b0cccb60a7de.855a24fac50d70e407dfcb136e03bdb8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Parent-s-Choice-Sensitivity-Premium-Baby-Formula-with-Iron-Dual-HMOs-34OZ/501893116",
    available: false,
  },
  {
    id: 7,
    name: "Nido kinder 1+ toddler powdered milk beverage",
    brand: "Nestle",
    retailer: "Walmart",
    price: 18.88,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/cb3428df-c229-42ef-9904-3521b261a6f6.88012336ec7cd0027b435544cacb573b.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    buyURL:
      "https://walmart.com/ip/Nestle-NIDO-Kinder-1-Toddler-Powdered-Milk-Beverage-56-4-Oz-3-52-LB-Canister-Shelf-Stable-Toddler-Drink-3-52-lb/10804304",
    available: true,
  },
  {
    id: 7,
    name: "Neuropro sensitive baby formula",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 30.28,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/60db5d40-edae-47ee-8300-3f43bd09f91a.b631c70df221452c8252714bfe2a8c37.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Sensitive-Baby-Formula-Brain-Immune-Support-DHA-Iron-Prebiotics-Lactose-Sensitivity-Infant-Formula-Inspired-Breast-Milk-Non-GMO-Powd/828805644",
    available: false,
  },
  {
    id: 8,
    name: "Milk-based baby formula with iron",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 35.83,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/93dadc9c-c1b9-46c5-a6b1-0c02c616aa3d.cdfd1ace7ca73a2bea6c0bff37af5be1.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Infant-Formula-Milk-based-Baby-Formula-with-Iron-Powder-29-4-oz-Can/537685710",
    available: true,
  },
  {
    id: 9,
    name: "Organic dairy infant powder",
    brand: "Earth's Best",
    retailer: "Walmart",
    price: 27.82,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/86fedf3c-1bf2-4545-934c-595773d08cbe.bb5ad2639bd9c53830b92d9c05ef3e02.png?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Earth-s-Best-Organic-Dairy-Infant-Powder-Formula-with-Iron-Omega-3-DHA-and-Omega-6-ARA-21-oz/15566889",
    available: true,
  },
  {
    id: 10,
    name: "Neuropro baby formula, triple prebiotic immune blend",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 11.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/f1dd76f2-85c8-4e42-a83e-6ebba88b1855.c3e42c105a296dd085faeabea3ecf617.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Baby-Formula-Triple-Prebiotic-Immune-Blend-2-FL-HMO-Expert-Recommended-Omega-3-DHA-Inspired-Breast-Milk-Non-GMO-Sample-Can-7-2-Oz/796077816",
    available: true,
  },
  {
    id: 11,
    name: "Neuropro gentlease baby formula, brain and immune support",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 38.36,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/0d00d32a-72f8-45f3-bc81-9b39a8b87db8.d3a96cff77a07233154b6570c8bf55b8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Gentlease-Baby-Formula-Brain-Immune-Support-DHA-Clinically-Proven-Reduce-Fussiness-Crying-Gas-Spit-up-24-Hours-Non-GMO-Powder-Can-27/362731379",
    available: true,
  },
  {
    id: 12,
    name: "Neuropro gentlease baby formula",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 14.24,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/876d11b6-5bfb-48d7-a5bb-7714524b83af.18d7043941b6a046e5cf8f0e36001af5.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Gentlease-Baby-Formula-Brain-Building-Nutrition-Clinically-Proven-reduce-Fussiness-Gas-Crying-24-hours-Ready-to-Use-Bottle-8-Fl-Oz-6/21989016",
    available: false,
  },
  {
    id: 13,
    name: "Advantage baby formula powder with iron",
    brand: "Parent's Choice",
    retailer: "Walmart",
    price: 9.56,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a10e905e-af0d-411d-8dd7-82e69fa94c06.720113391452a7909c81ebb32c301c13.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Parent-s-Choice-Advantage-Baby-Formula-Powder-with-Iron-Immune-Support-12-4-oz-Can/19863399",
    available: false,
  },
  {
    id: 14,
    name: "Gentlease baby formula, reduces fussiness",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 18.08,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/5787c093-70e9-4ad3-ac02-21fd325cbfff.86ae6b7c564c5751589ebde1f6db5b46.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Gentlease-Baby-Formula-Reduces-Fussiness-Gas-Crying-Spit-up-24-hours-DHA-Choline-support-Brain-development-Powder-Can-12-4-Oz/21989018",
    available: true,
  },
  {
    id: 15,
    name: "360 total care infant formula, ready-to-feed",
    brand: "Similac",
    retailer: "Walmart",
    price: 13.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/d67e0fb6-ae5f-481f-8c90-9fe63d647c11.4fa0435626990905f9a55f05956ba1fb.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-360-Total-Care-Infant-Formula-Ready-to-Feed-2-fl-oz-Case-of-12/232119780",
    available: true,
  },
  {
    id: 16,
    name: "Hypoallergenic infant formula for cow's milk allergy",
    brand: "Nutramigen",
    retailer: "Walmart",
    price: 8.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/439dd88c-ba2f-4c7d-8c07-b4a1ef589669.133675942fe29486f835d2932f6bd5f2.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Nutramigen-Hypoallergenic-Infant-Formula-for-Cow-s-Milk-Allergy-Concentrate-13-fl-oz-Can/19477077",
    available: true,
  },
  {
    id: 17,
    name: "Neuropro gentlease infant formula",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 47.46,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/cad203a3-e139-4a07-9bc9-008494d1c784.5366523083e696b7d9f7ee75169d2f4c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Gentlease-Infant-Formula-for-Fussiness-Gas-and-Crying-Powder-35-2-oz-Refill-Box/685513492",
    available: true,
  },
  {
    id: 18,
    name: "Alimentum",
    brand: "Similac",
    retailer: "Walmart",
    price: 11.73,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/1e9aec70-cdb7-455d-b0f1-73875de3be63.1628f3d3663719693ba3d1fde141982a.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-Alimentum-with-2-FL-HMO-Ready-to-Feed-Baby-Formula-32-fl-oz-Bottle/19477013",
    available: true,
  },
  {
    id: 19,
    name: "Gentle baby formula with 2'-fl hmo, probiotic b. lactis and iron",
    brand: "Gerber Good Start",
    retailer: "Walmart",
    price: 18.78,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a29eb1d2-a044-4e3a-869a-078905674ea5.84bf3dab2f75f362d05f641733c6e5d3.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Gerber-Good-Start-Gentle-Baby-Formula-with-2-FL-HMO-Probiotic-B-lactis-and-Iron-12-7-oz-Canister/14662909",
    available: true,
  },
  {
    id: 20,
    name: "360 total care sensitive infant formula",
    brand: "Similac",
    retailer: "Walmart",
    price: 14.15,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/ac37c56a-4deb-4d20-9766-c6bb111537f5.b878b322bdd08ac5e7b3c683d03de695.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-360-Total-Care-Sensitive-Infant-Formula-Ready-to-Feed-2-fl-oz-Bottle-Case-of-12/290670025",
    available: true,
  },
  {
    id: 21,
    name: "Easy-digest goat milk infant formula, stage 1",
    brand: "Aussie Bubs",
    retailer: "Walmart",
    price: 44.78,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/eb736699-821c-4639-b43b-990bf7db6dec.919dfb155c0d48460425e37f26c7a701.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    buyURL:
      "https://walmart.com/ip/Aussie-Bubs-Easy-digest-Goat-Milk-Infant-Formula-Stage-1-28-2-oz/1766772631",
    available: true,
  },
  {
    id: 22,
    name: "Neuropro gentlease baby formula",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 9.12,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/c0bb956c-280f-4d48-b41b-d8af28556ca6.ed543bba9dd86fd9f9c272c3472c2c1e.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Gentlease-Baby-Formula-Brain-Building-Nutrition-Clinically-Proven-reduce-Fussiness-Gas-Crying-24-hours-Ready-to-Use-Bottle-32-Fl-Oz/45913274",
    available: true,
  },
  {
    id: 23,
    name: "Nutramigen infant formula, hypoallergenic and lactose free formula",
    brand: "Nutramigen",
    retailer: "Walmart",
    price: 14.07,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/415aed54-18d9-4ff5-b557-d5300c7f98b8.658856f64eaf63754235f9b67ffd07e3.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Nutramigen-Infant-Formula-Hypoallergenic-Lactose-Free-Formula-Enflora-LGG-Fast-Relief-Severe-Crying-Colic-Ready-to-Use-Liquid-32-Fl-Oz/45913272",
    available: true,
  },
  {
    id: 24,
    name: "Soothepro powder infant formula",
    brand: "Gerber Good Start",
    retailer: "Walmart",
    price: 36.48,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/03468e8d-c033-4a86-b603-783f31b60d7b.dabe94896761f9ee5d2a0720161a0b94.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Gerber-Good-Start-SoothePro-Powder-Infant-Formula-30-6-oz-Canister/808797943",
    available: true,
  },
  {
    id: 25,
    name: "Soothepro non-gmo powder baby formula",
    brand: "Gerber Good Start",
    retailer: "Walmart",
    price: 18.78,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a9036dd4-7d04-401b-9abf-d929caa4f1f0.1e8a4d2c5aa6c7340f0651da3e4582d8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Gerber-Good-Start-SoothePro-Non-GMO-Powder-Baby-Formula-12-4-oz-Canister/22210633",
    available: true,
  },
  {
    id: 26,
    name: "Infant formula, milk-based baby formula with iron, omega-3 dha & choline",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 7.12,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/94e86150-57ae-4a68-9566-c63f0794f882.32dec00f91ed3c2e1651a8f43b7cf257.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Infant-Formula-Milk-based-Baby-Formula-with-Iron-Omega-3-DHA-Choline-Ready-to-Use-Liquid-Bottle-32-Fl-Oz/535226730",
    available: true,
  },
  {
    id: null,
    name: "Infant formula, clinically proven to reduce reflux",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 18.72,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/f218221f-b24c-49be-9571-65b4e1743f50.1bcd64f2dfb9d6d8afd84551560364e6.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-A-R-Infant-Formula-Clinically-Proven-Reduce-Reflux-Spit-Up-1-Week-Iron-DHA-Brain-Development-Probiotics-Support-Digestive-Immune-Health-Powde/17179640",
    available: true,
  },
  {
    id: null,
    name: "Neuropro baby formula, triple prebiotic immune blend",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 9.64,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/f1d120cf-5535-4468-9310-de794db96dfb.81a56f862e536e121ac839e01efad0e4.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Baby-Formula-Triple-Prebiotic-Immune-Blend-2-FL-HMO-Expert-Recommended-Omega-3-DHA-Inspired-Breast-Milk-Non-GMO-Ready-to-Use-Liquid-/244808654",
    available: true,
  },
  {
    id: null,
    name: "Sensitive infant formula with iron, for fussiness and gas",
    brand: "Similac",
    retailer: "Walmart",
    price: 7.23,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/81c6a07f-a8bd-44e2-ab0c-faa983623528.19a7404c0c93fb4a6fed8de8641ca3cf.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-Sensitive-Infant-Formula-with-Iron-For-Fussiness-and-Gas-Baby-Formula-Ready-to-Feed-Ready-to-Feed-1-qt/14018033",
    available: false,
  },
  {
    id: null,
    name: "Sensitive infant formula with iron",
    brand: "Similac",
    retailer: "Walmart",
    price: 17.46,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/fc4ec500-6fb4-481d-a4a6-6089e5a9952f.08b60e6fd1aeb3b47d41d129068c6b1e.png?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-Sensitive-Infant-Formula-with-Iron-Powder-12-5-oz-Can/14018006",
    available: true,
  },
  {
    id: null,
    name: "Neosure infant formula with iron, for babies born prematurely",
    brand: "Similac",
    retailer: "Walmart",
    price: 19.27,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/afbae12d-2ff6-4464-8e81-6f22698fe4d3_1.a76635d1dcff5e688d9338e20a0d6b81.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-NeoSure-Infant-Formula-with-Iron-For-Babies-Born-Prematurely-Powder-13-1-oz/14018029",
    available: true,
  },
  {
    id: null,
    name: "Neuropro enfacare premature baby formula milk based with iron",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 22.22,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/6ceff2a9-5797-4548-b662-8fb1920650fb.19d8034ea5db283d5cd7a97538a80a9f.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-EnfaCare-Premature-Baby-Formula-Milk-Based-with-Iron-Powder-Can-13-6-Oz/304928202",
    available: true,
  },
  {
    id: null,
    name: "Organic sensitivity low lactose infant formula with iron",
    brand: "Earth's Best",
    retailer: "Walmart",
    price: 38.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/59143998-e142-447f-82d4-6e55e3ba3930.cdfd63d604104176ca4f1a6adda046b9.png?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Earth-s-Best-Organic-Sensitivity-Low-Lactose-Infant-Formula-with-Iron-Omega-3-DHA-and-Omega-6-ARA-32-oz-Can/127874090",
    available: false,
  },
  {
    id: null,
    name: "Neuropro baby formula, triple prebiotic immune blend",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 42.42,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/9ed76627-1701-45da-9b3b-94f2ae6eb757.66b2d235ab4d55217b4e94ec84b689d8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Baby-Formula-Triple-Prebiotic-Immune-Blend-2-FL-HMO-Expert-Recommended-Omega-3-DHA-Inspired-Breast-Milk-Non-GMO-Refill-box-36-4-Oz/584334770",
    available: true,
  },
  {
    id: null,
    name: "Advance infant formula with iron",
    brand: "Similac",
    retailer: "Walmart",
    price: 17.46,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/66864f2f-3e48-4e9c-acd8-570451a504ab.b9988403847882d2f6f3fb92e139b60d.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-Advance-Infant-Formula-with-Iron-Powder-12-4-Ounce-Tub/14018005",
    available: true,
  },
  {
    id: null,
    name: "Hypoallergenic infant formula with enflora",
    brand: "Nutramigen",
    retailer: "Walmart",
    price: 33.32,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a10fdb9f-71e5-485e-9c8f-646bf6ca242b.8abe7c3f1aac77a46920e9fcbdbfbce5.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Nutramigen-Hypoallergenic-Infant-Formula-with-Enflora-LGG-Powder-12-6-oz-Can/14017994",
    available: true,
  },
  {
    id: null,
    name: "Advance infant formula with iron",
    brand: "Similac",
    retailer: "Walmart",
    price: 5.37,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/57174746-5811-420b-99f9-62525cf093d8.71f456c2b8c3b3706208ef01fbfaa2e7.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-Advance-Infant-Formula-with-Iron-Ready-to-Feed-13-Fl-Oz-Can/14018027",
    available: true,
  },
  {
    id: null,
    name: "Advantage premium baby formula powder with iron",
    brand: "Parent's Choice",
    retailer: "Walmart",
    price: 93.92,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/60bc63df-dd4e-4444-8a6c-34314e5b1ae2.b64375d9f4825b7fe9617e74a96b55b4.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Parent-s-Choice-Advantage-Premium-Baby-Formula-Powder-with-Iron-Dual-HMOs-36-oz-Can-4-Pack/138040187",
    available: true,
  },
  {
    id: null,
    name: "Neuropro baby formula, triple prebiotic immune blend",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 37.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/ea88f0d8-8982-4663-bf17-739c0c54f6da.1c3c31dea18b35280ab5384c223056a5.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-NeuroPro-Baby-Formula-Triple-Prebiotic-Immune-Blend-2-FL-HMO-Expert-Recommended-Omega-3-DHA-Inspired-Breast-Milk-Non-GMO-Powder-Can-28-3-Oz/274241484",
    available: true,
  },
  {
    id: null,
    name: "360 total care infant formula",
    brand: "Similac",
    retailer: "Walmart",
    price: 16.82,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/68331d5a-0725-4b4f-a031-5ab01de351d4.1ffc62a311bf7ea567180cf45f3d4c1e.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Similac-360-Total-Care-Infant-Formula-Ready-to-Feed-8-fl-oz-Bottle/503786377",
    available: true,
  },
  {
    id: null,
    name: "Gentlease baby formula, reduces fussiness, gas",
    brand: "Enfamil",
    retailer: "Walmart",
    price: 35.83,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/01a2fafb-34f4-4ea9-a837-6563c446ec4f.d394f9fc983f86045b2f5df11d6ccf70.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "https://walmart.com/ip/Enfamil-Gentlease-Baby-Formula-Reduces-Fussiness-Gas-Crying-Spit-up-24-hours-DHA-Choline-support-Brain-development-Powder-Can-27-7-Oz/209833592",
    available: true,
  },
  {
    id: null,
    name: "NeuroPro Ready to Feed Infant Formula Bottles",
    brand: "Enfamil",
    retailer: "Target",
    price: 28.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_db8483f8-f404-4a8d-bad1-38ede6d20b13",
    buyURL:
      "https://www.target.com/p/enfamil-neuropro-ready-to-feed-infant-formula-bottles-2-fl-oz-each-24ct/-/A-53180259",
    available: true,
  },
  {
    id: null,
    name: "Gentlease Powder Infant Formula",
    brand: "Enfamil",
    retailer: "Target",
    price: 35.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_87efa910-9fd0-40d0-847d-9f9a8aff57f2",
    buyURL:
      "https://www.target.com/p/enfamil-gentlease-powder-infant-formula-27-7oz/-/A-53180270",
    available: true,
  },
  {
    id: null,
    name: "Pro-Sensitive Non-GMO Powder Infant Formula",
    brand: "Similac",
    retailer: "Target",
    price: 36.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_6e6be6ba-f9c5-40b3-a323-939c28be2328",
    buyURL:
      "https://www.target.com/p/similac-pro-sensitive-non-gmo-powder-infant-formula-29-8oz/-/A-70000004",
    available: true,
  },
  {
    id: null,
    name: "Stage 1 Powder Infant Formula",
    brand: "Kendamil",
    retailer: "Target",
    price: 33.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_78de3cee-0793-449d-b733-0e6e4dbb0d0c",
    buyURL:
      "https://www.target.com/p/kendamil-stage-1-powder-infant-formula-31-7oz/-/A-86918585",
    available: true,
  },
  {
    id: null,
    name: "Gentlease Ready To Feed Infant Formula Bottle",
    brand: "Enfamil",
    retailer: "Target",
    price: 9.19,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_4e6608e1-dfa0-4950-8b5b-ecd2c675afa9",
    buyURL:
      "https://www.target.com/p/enfamil-gentlease-ready-to-feed-infant-formula-bottle-32-fl-oz/-/A-13962231",
    available: true,
  },
  {
    id: null,
    name: "Pro-Advance Non-GMO Powder Infant Formula",
    brand: "Similac",
    retailer: "Target",
    price: 36.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_ddad06ac-3bb7-4ccf-91e7-bf09f2fa54a2",
    buyURL:
      "https://www.target.com/p/similac-pro-advance-non-gmo-powder-infant-formula-30-8oz/-/A-70000038",
    available: true,
  },
  {
    id: null,
    name: "Premium Powder Toddler Formula",
    brand: "Enfagrow",
    retailer: "Target",
    price: 26.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_b2ef4f4b-a012-4af1-8f65-8b2e964a0400",
    buyURL:
      "https://www.target.com/p/enfagrow-premium-powder-toddler-formula-32oz/-/A-17078550",
    available: true,
  },
  {
    id: null,
    name: "Pro-Total Comfort Non-GMO Powder Infant Formula",
    brand: "Similac",
    retailer: "Target",
    price: 36.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_a0f774e2-dc77-4035-9527-38cb0eda10b4",
    buyURL:
      "https://www.target.com/p/similac-pro-total-comfort-non-gmo-powder-infant-formula-29-8oz/-/A-53270055",
    available: false,
  },
  {
    id: null,
    name: "NeuroPro Non-GMO Ready to Feed Toddler Formula Bottles",
    brand: "Enfagrow",
    retailer: "Target",
    price: 11.19,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_4c6ea3fe-ac16-4f73-aac0-830e409e2f1b",
    buyURL:
      "https://www.target.com/p/enfagrow-neuropro-non-gmo-ready-to-feed-toddler-formula-bottles-8-fl-oz-each-6ct/-/A-50879704",
    available: true,
  },
  {
    id: null,
    name: "NeuroPro Gentlease Non-GMO Powder Infant Formula",
    brand: "Enfamil",
    retailer: "Target",
    price: 43.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_3c5bc82e-0f97-4e1c-95d2-3f26a585f06e",
    buyURL:
      "https://www.target.com/p/enfamil-neuropro-gentlease-non-gmo-powder-infant-formula-27-4oz/-/A-79334027",
    available: true,
  },
  {
    id: null,
    name: "360 Total Care Advance Non-GMO Ready to Feed Infant Formula Bottles",
    brand: "Similac",
    retailer: "Target",
    price: 13.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_143b266a-38ba-4fd1-bdf7-7b78ddbdd344",
    buyURL:
      "https://www.target.com/p/similac-360-total-care-advance-non-gmo-ready-to-feed-infant-formula-bottles-2-fl-oz-each-12ct/-/A-84795813",
    available: true,
  },
  {
    id: null,
    name: "Next Stage Powder Toddler Formula",
    brand: "up & up",
    retailer: "Target",
    price: 11.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_d52af723-91b0-41d7-a406-1996aef630f2",
    buyURL:
      "https://www.target.com/p/next-stage-powder-toddler-formula-24oz-up-38-up-8482/-/A-17233568",
    available: true,
  },
  {
    id: null,
    name: "Organic Powder Infant Formula",
    brand: "Earth's Best",
    retailer: "Target",
    price: 45.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_0af6c0be-76e7-4ecd-b272-c76b91a61a33",
    buyURL:
      "https://www.target.com/p/earth-39-s-best-organic-powder-infant-formula-32oz/-/A-17299965",
    available: true,
  },
  {
    id: null,
    name: "NeuroPro Ready to Feed Infant Formula Bottle",
    brand: "Enfamil",
    retailer: "Target",
    price: 9.79,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_40b7b00f-01e0-4367-a9a9-71c385b1a23c",
    buyURL:
      "https://www.target.com/p/enfamil-neuropro-ready-to-feed-infant-formula-bottle-32-fl-oz/-/A-53180301",
    available: true,
  },
  {
    id: null,
    name: "Pure Bliss Non-GMO Powder Infant Formula",
    brand: "Similac",
    retailer: "Target",
    price: 29.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_8e820b6f-c789-46c2-8702-0f943a089bdb",
    buyURL:
      "https://www.target.com/p/similac-pure-bliss-non-gmo-powder-infant-formula-24-7oz/-/A-54556804",
    available: true,
  },
  {
    id: null,
    name: "NeuroPro Non-GMO Powder Infant Formula",
    brand: "Enfamil",
    retailer: "Target",
    price: 41.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_dd10f94b-bbfc-4786-92c8-f5e5e94b2259",
    buyURL:
      "https://www.target.com/p/enfamil-neuropro-non-gmo-powder-infant-formula-28-3oz/-/A-79334028",
    available: true,
  },
  {
    id: null,
    name: "Organic Powder Infant Formula",
    brand: "Bobbie Baby",
    retailer: "Target",
    price: 25.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_d3156123-28b5-4703-9050-b854179054c7",
    buyURL:
      "https://www.target.com/p/bobbie-baby-organic-powder-infant-formula-14oz/-/A-85776110",
    available: true,
  },
  {
    id: null,
    name: "Advantage Powder Infant Formula",
    brand: "up & up",
    retailer: "Target",
    price: 19.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_d2ae7ca9-5734-473a-b048-5e81273dada6",
    buyURL:
      "https://www.target.com/p/advantage-powder-infant-formula-35oz-up-38-up-8482/-/A-70000043",
    available: true,
  },
  {
    id: null,
    name: "Alimentum Non-GMO Hypoallergenic Ready to Feed Infant Formula",
    brand: "Similac",
    retailer: "Target",
    price: 11.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_b94e4244-9aeb-4d4b-a3c3-32d73eca1760",
    buyURL:
      "https://www.target.com/p/similac-alimentum-non-gmo-hypoallergenic-ready-to-feed-infant-formula-32-fl-oz/-/A-14782760",
    available: true,
  },
  {
    id: null,
    name: "Pro-Advance Non-GMO Ready-to-Feed Infant Formula",
    brand: "Similac",
    retailer: "Target",
    price: 8.19,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_c853d3d9-c8e7-4af4-a22f-dfae875fb2dd",
    buyURL:
      "https://www.target.com/p/similac-pro-advance-non-gmo-ready-to-feed-infant-formula-32-fl-oz/-/A-17425675",
    available: true,
  },
  {
    id: null,
    name: "Sensitivity Non GMO Powder Infant Formula",
    brand: "up & up",
    retailer: "Target",
    price: 19.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_65f08efd-60c7-4c16-80a1-5f38a67b89ef",
    buyURL:
      "https://www.target.com/p/sensitivity-non-gmo-powder-infant-formula-33-2oz-up-38-up-8482/-/A-70000046",
    available: true,
  },
  {
    id: null,
    name: "First Powder Infant Formula",
    brand: "Aptamil",
    retailer: "Target",
    price: 34.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_a76106a3-8f7c-49d8-b7e9-c5b2c279f234",
    buyURL:
      "https://www.target.com/p/aptamil-first-powder-infant-formula-28-2oz/-/A-87036707",
    available: true,
  },
  {
    id: null,
    name: "Nutramigen Hypoallergenic Ready to Feed Infant Formula Bottle",
    brand: "Enfamil",
    retailer: "Target",
    price: 12.29,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_39e1a2d3-7110-4061-917b-75839f89ad84",
    buyURL:
      "https://www.target.com/p/enfamil-nutramigen-hypoallergenic-ready-to-feed-infant-formula-bottle-32-fl-oz/-/A-46802214",
    available: true,
  },
  {
    id: null,
    name: "Powder Infant Formula",
    brand: "up & up",
    retailer: "Target",
    price: 19.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_1e538b1f-a0ad-4cb7-a8a2-ed8fdd882f41",
    buyURL:
      "https://www.target.com/p/powder-infant-formula-35oz-up-38-up-8482/-/A-70000044",
    available: true,
  },
  {
    id: null,
    name: "Organic Powder Infant Formula",
    brand: "HappyBaby",
    retailer: "Target",
    price: 29.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_695c76fd-dc06-4b9a-9bd2-56b71b3aca3a",
    buyURL:
      "https://www.target.com/p/happybaby-organic-powder-infant-formula-21oz/-/A-52146325",
    available: true,
  },
  {
    id: null,
    name: "Gentle Non-GMO Powder Infant Formula;",
    brand: "up & up",
    retailer: "Target",
    price: 19.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_67114efa-4605-4e91-9609-3d9c5d3c33ab",
    buyURL:
      "https://www.target.com/p/gentle-non-gmo-powder-infant-formula-33-2oz-up-38-up-8482/-/A-70000042",
    available: true,
  },
  {
    id: null,
    name: "o.b. Original Multipack Tampons - Applicator-Free - 40ct",
    brand: "o.b.",
    retailer: "Target",
    price: 6.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_fbc9335f-fe54-49fe-b551-0784875c554d",
    buyURL:
      "https://www.target.com/p/o-b-original-multipack-tampons-applicator-free-unscented-regular-super-super-plus-40ct/-/A-14013693",
    available: true,
  },
  {
    id: null,
    name: "Playtex Sport Tampons - Plastic - Regular - 36ct",
    brand: "Playtex",
    retailer: "Target",
    price: 7.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_5590ed0e-2647-42bb-856a-6d5dce5ddf6f",
    buyURL:
      "https://www.target.com/p/playtex-sport-tampons-plastic-unscented-regular-36ct/-/A-13397719",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons Regular/Super - 34ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_733a402e-4683-429d-a322-bf638f70a0c3",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-regular-super-absorbency-with-leakguard-braid-duo-pack-unscented-34ct/-/A-46793820",
    available: true,
  },
  {
    id: null,
    name: "L . Organic Cotton Full Size Multipack Refill Tampons - 42ct",
    brand: "L .",
    retailer: "Target",
    price: 10.69,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_baffae11-0c5c-4a74-9751-b4ad0d6c1ba4",
    buyURL:
      "https://www.target.com/p/l-organic-cotton-full-size-multipack-refill-tampons-regular-super-42ct/-/A-84743601",
    available: true,
  },
  {
    id: null,
    name: "Tampax Radiant Light and Regular Duo-Pack Tampons - 26ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_460cbc87-f6c6-403a-a03d-859fd6c0c57a",
    buyURL:
      "https://www.target.com/p/tampax-radiant-light-and-regular-duo-pack-tampons-26ct/-/A-81782496",
    available: true,
  },
  {
    id: null,
    name: "Tampax Radiant Tampons Regular Absorbency - 28ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_7eda07b9-85ee-4a32-96a0-8c6836e46bc4",
    buyURL:
      "https://www.target.com/p/tampax-radiant-tampons-regular-absorbency-unscented-28ct/-/A-76155403",
    available: true,
  },
  {
    id: null,
    name: "Tampax Radiant Duopack Regular/Super Absorbency - 28ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_7a67cad4-4adb-431e-adb8-941b920d991b",
    buyURL:
      "https://www.target.com/p/tampax-radiant-duopack-regular-super-absorbency-unscented-plastic-tampons-28ct/-/A-76155398",
    available: true,
  },
  {
    id: null,
    name: "L . Organic Cotton Full Size Tampons - Regular - 30ct",
    brand: "L .",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_3693a1c9-7689-4094-a439-58301d96fc18",
    buyURL:
      "https://www.target.com/p/l-organic-cotton-full-size-tampons-regular-30ct/-/A-84743583",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons Light Absorbency with LeakGuard - 36ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_44d2a58d-2794-4c4a-a4ef-d574990d3b12",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-light-absorbency-with-leakguard-braid-unscented-36ct/-/A-13368851",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons Super Absorbency with LeakGuard - 36ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_d74c56fc-4042-4f19-98bf-22cc4578c214",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-super-absorbency-with-leakguard-braid-unscented-36ct/-/A-13369121",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons Trio Pack with LeakGuard Braid - 47ct",
    brand: "Tampax",
    retailer: "Target",
    price: 10.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_cb249433-0faf-4ffe-bc49-51e45c2f9b29",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-trio-pack-with-plastic-applicator-and-leakguard-braid-light-regular-super-absorbency-unscented-47ct/-/A-13190964",
    available: true,
  },
  {
    id: null,
    name: "Playtex Sport Multipack Tampons - Plastic - 48ct",
    brand: "Playtex",
    retailer: "Target",
    price: 9.79,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_16a5f16c-cac5-45b7-a117-e76786ed5ec0",
    buyURL:
      "https://www.target.com/p/playtex-sport-multipack-tampons-plastic-unscented-regular-super-48ct/-/A-14670716",
    available: true,
  },
  {
    id: null,
    name: "U by Kotex Click Compact Unscented Tampons - Regular - 45ct",
    brand: "U by Kotex",
    retailer: "Target",
    price: 9.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_c0eea172-70df-436c-bd39-7b041457464f",
    buyURL:
      "https://www.target.com/p/u-by-kotex-click-compact-unscented-tampons-regular-45ct/-/A-47919599",
    available: true,
  },
  {
    id: null,
    name: "Tampons - Regular Absorbency - Plastic - 36ct",
    brand: "up & up",
    retailer: "Target",
    price: 4.29,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_c8f5fe6a-7e04-43a3-9cc7-962ce9e53762",
    buyURL:
      "https://www.target.com/p/tampons-regular-absorbency-plastic-36ct-up-38-up-8482/-/A-50616712",
    available: true,
  },
  {
    id: null,
    name: "Multipack Tampons - Plastic - 50ct",
    brand: "up & up",
    retailer: "Target",
    price: 5.89,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_484217a4-2e0d-4afb-8fdb-938cde04501f",
    buyURL:
      "https://www.target.com/p/multipack-tampons-plastic-50ct-up-38-up-8482/-/A-15104004",
    available: true,
  },
  {
    id: null,
    name: "Cora Organic Cotton Tampons Mix Pack - Regular/Super Absorbency - 32ct",
    brand: "Cora",
    retailer: "Target",
    price: 11.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_9fb09ec2-3a14-4bb5-a257-ad0bde93dab9",
    buyURL:
      "https://www.target.com/p/cora-organic-cotton-tampons-mix-pack-regular-super-absorbency-32ct/-/A-53062312",
    available: true,
  },
  {
    id: null,
    name: "U by Kotex Click Compact Tampons -  Multipack -  Regular/Super -  Unscented - 45ct",
    brand: "U by Kotex",
    retailer: "Target",
    price: 9.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_a44659f5-200d-4d95-ac0c-f4dc9e115cfa",
    buyURL:
      "https://www.target.com/p/u-by-kotex-click-compact-tampons-multipack-regular-super-unscented-45ct/-/A-50567052",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons with LeakGuard Braid - Super Plus Absorbency - Unscented - 36ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_56364f36-f562-4c85-a696-9a9798342d8f",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-with-leakguard-braid-super-plus-absorbency-unscented-36ct/-/A-13368609",
    available: true,
  },
  {
    id: null,
    name: "Playtex Sport Ultra Tampons - 36ct",
    brand: "Playtex Sport",
    retailer: "Target",
    price: 7.69,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_06e23819-e8b6-4c3a-95b2-90110ec7dbbe",
    buyURL:
      "https://www.target.com/p/playtex-sport-ultra-tampons-36ct/-/A-84777475",
    available: true,
  },
  {
    id: null,
    name: "U by Kotex Click Compact Tampons -  Super -  Unscented - 32ct",
    brand: "U by Kotex",
    retailer: "Target",
    price: 7.19,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_afbab25b-f25d-4e54-990f-6094c9c59e89",
    buyURL:
      "https://www.target.com/p/u-by-kotex-click-compact-tampons-super-unscented-32ct/-/A-12213583",
    available: true,
  },
  {
    id: null,
    name: "L . Organic Cotton Full Size Tampons - Super - 30ct",
    brand: "L .",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_fb42db3f-a4c7-4c9b-8416-b4f1c0574d19",
    buyURL:
      "https://www.target.com/p/l-organic-cotton-full-size-tampons-super-30ct/-/A-84743588",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons - Ultra Absorbency with LeakGuard Braid - Unscented - 36ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_1eb8e31a-4093-4db2-b1fb-17c2634627aa",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-ultra-absorbency-with-leakguard-braid-unscented-36ct/-/A-13369058",
    available: true,
  },
  {
    id: null,
    name: "L . Organic Cotton Full Size Multipack Tampons - Regular/Super - 30ct",
    brand: "L .",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_1facb8fa-96c2-45ba-919f-b98946687e7f",
    buyURL:
      "https://www.target.com/p/l-organic-cotton-full-size-multipack-tampons-regular-super-30ct/-/A-84743590",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl TriplePack Tampons - Regular/Super/Super Plus/ - Unscented - 34ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_51469815-7136-419a-9ff8-e36b69131ef8",
    buyURL:
      "https://www.target.com/p/tampax-pearl-triplepack-tampons-regular-super-super-plus-unscented-34ct/-/A-13368852",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl with LeakGuard Braid Duo Pack Unscented Tampons - Light/Regular Absorbency - 34ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_4871f032-bd02-426e-ab7e-9e5e9f4ca8d8",
    buyURL:
      "https://www.target.com/p/tampax-pearl-with-leakguard-braid-duo-pack-unscented-tampons-light-regular-absorbency-34ct/-/A-79186014",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Tampons Regular Absorbency with LeakGuard Braid - Unscented - 36ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_e1cf0814-3611-471d-8147-37efe566b591",
    buyURL:
      "https://www.target.com/p/tampax-pearl-tampons-regular-absorbency-with-leakguard-braid-unscented-36ct/-/A-13369122",
    available: true,
  },
  {
    id: null,
    name: "Tampax Pearl Triple Pack with Super/Super Plus/Ultra Absorbency Unscented Plastic Tampons - 34ct",
    brand: "Tampax",
    retailer: "Target",
    price: 7.99,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_42a39cfd-2c77-4a8b-8f61-01c5cb20baca",
    buyURL:
      "https://www.target.com/p/tampax-pearl-triple-pack-with-super-super-plus-ultra-absorbency-unscented-plastic-tampons-34ct/-/A-75663439",
    available: true,
  },
  {
    id: null,
    name: "Rounded-Tip Plastic Applicator Unscented Super Plus Tampons - 36ct - up &#38; up&#8482;",
    brand: "up & up",
    retailer: "Target",
    price: 6.49,
    quantity: null,
    imageURL:
      "https://target.scene7.com/is/image/Target/GUEST_f80c8e0a-66df-4ce9-a80e-9439b933da80",
    buyURL:
      "https://www.target.com/p/rounded-tip-plastic-applicator-unscented-super-plus-tampons-36ct-up-38-up-8482/-/A-75665714",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, with leakguard braid, regular absorbency, unscented, 18 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 4.67,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/d927f5fe-b765-4f9a-84b0-f74f3b676180.f38860f2d97c855edcec414325574868.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-with-LeakGuard-Braid-Regular-Absorbency-Unscented-18-Count/20468140",
    available: true,
  },
  {
    id: null,
    name: "playtex sport regular 48 ct",
    brand: "Playtex",
    retailer: "Walmart",
    price: 9.68,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/82f9f792-a1b5-40b3-8a8e-a2e6226bc6a3.39850c69b90856fb22085630ef9f1a40.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL: "/ip/Playtex-Sport-Regular-48-CT/673680437",
    available: true,
  },
  {
    id: null,
    name: "u by kotex click compact multipack tampons, regular/super, unscented, 30 count",
    brand: "Kotex",
    retailer: "Walmart",
    price: 7.12,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/797fd0ba-5949-4f9a-b293-33e2d725f8b5.a0ee9e42a506f4d5847276d1b1cee602.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/U-by-Kotex-Click-Compact-Multipack-Tampons-Regular-Super-Unscented-30-Count/610023504",
    available: true,
  },
  {
    id: null,
    name: "u by kotex click compact multipack tampons, regular/super, unscented, 45 count",
    brand: "Kotex",
    retailer: "Walmart",
    price: 9.36,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/08bd9cd5-e4e4-4103-878c-721ba2d22263.3b94f16130d424b258dfbd06e5ca9172.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/U-by-Kotex-Click-Compact-Multipack-Tampons-Regular-Super-Unscented-45-Count/629153468",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl super absorbency plastic tampons, unscented, 18 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 4.67,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a6b63806-4740-4248-a7ce-ab401b814f4c.245f301e400fd1f8deb19fa2fc61e3fe.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Super-Absorbency-Plastic-Tampons-Unscented-18-Ct/10450957",
    available: true,
  },
  {
    id: null,
    name: "tampax radiant tampons, unscented, regular/ super absorbency, 28 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/8f3610e7-569c-4b53-bfb3-0c693e8b294a.a31d6f4c8d16461787dcfa4e2c73e8d8.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Radiant-Tampons-Unscented-Regular-Super-Absorbency-28-Ct/504871567",
    available: true,
  },
  {
    id: null,
    name: "cora organic cotton tampons regular/super multipack 96 ct",
    brand: "Cora",
    retailer: "Walmart",
    price: 24.75,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/55eaa877-3e35-4d1c-a255-16e9c39a59a1.fffa0a7ad9ccce3cdaaae26479108832.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Cora-Organic-Cotton-Tampons-Regular-Super-Multipack-96-ct/396335741",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons multi-pack, light/regular/super absorbency, 47 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 10.47,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/919cf5f2-2991-4846-8d26-8bf83ab2690a.eece8d4d202d79f9ea842ea610982f3c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Multi-Pack-Light-Regular-Super-Absorbency-47-Ct/854115382",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, unscented, super, super plus and ultra, 34 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/12f5e8e8-4209-4235-953b-c6e13784f357.897b405fc18f53769804bac65dc543da.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Unscented-Super-Super-Plus-and-Ultra-34-Ct/390837645",
    available: true,
  },
  {
    id: null,
    name: "u by kotex click compact tampons, super, unscented, 32 count",
    brand: "Kotex",
    retailer: "Walmart",
    price: 7.12,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/3eeb1f68-c039-4a62-8b9e-5110cba22d5e.8771a8a5efdfdb10547ff3f88a3c8a1d.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    buyURL:
      "/ip/U-by-Kotex-Click-Compact-Tampons-Super-Unscented-32-Count/452715856",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, super plus absorbency, unscented, 18 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 4.67,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/4acbc060-af2a-498e-97be-dab230390472.adaabd545975be38788b603d12b8b4ae.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Super-Plus-Absorbency-Unscented-18-Ct/10450958",
    available: true,
  },
  {
    id: null,
    name: "lola super tampons, compact plastic applicator, 20 ct",
    brand: "LOLA",
    retailer: "Walmart",
    price: 6.98,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/4a0ff8aa-0899-41a7-8904-8548e78b4d15.7f6d74555c2babbf14ad32557fdf187e.jpeg?odnHeight=180&odnWidth=180&odnBg=FFFFFF",
    buyURL: "/ip/LOLA-Super-Tampons-Compact-Plastic-Applicator-20-Ct/951728303",
    available: true,
  },
  {
    id: null,
    name: "u by kotex click compact tampons, regular, unscented, 45 count",
    brand: "Kotex",
    retailer: "Walmart",
    price: 9.36,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a5a7f3e1-d2e4-4ac1-8ba3-b426aa6cbcde.c9045a659518e1a5849ed78f723d8501.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/U-by-Kotex-Click-Compact-Tampons-Regular-Unscented-45-Count/973420847",
    available: true,
  },
  {
    id: null,
    name: "playtex sport multi-pack regular and super plastic applicator unscented tampons, 48 ct total, 360 degree sport level period protection, traps leaks, no-slip grip applicator, moves with you",
    brand: "Playtex",
    retailer: "Walmart",
    price: 9.68,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/02eeb3f3-a528-4bd8-bf08-2aed717c6e68.78d804057ab8d0202aa90aebedeb1a82.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Playtex-Sport-Multi-Pack-Regular-And-Super-Plastic-Applicator-Unscented-Tampons-48-Ct-Total-360-Degree-Level-Period-Protection-Traps-Leaks-No-Slip-Gr/162594077",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, light absorbency, unscented, 18 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 4.67,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/3972880f-2cff-4b8c-8bcf-edd64c5ecca7.0a5795c2f67404a10cffb9c6411c9697.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Light-Absorbency-Unscented-18-Ct/953983676",
    available: true,
  },
  {
    id: null,
    name: "tampax radiant tampons duo pack regular/super absorbency, unscented, 38 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 10.47,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/f6998562-4abf-4c06-ae2f-251f0de69f3b.a9a17b428cd4db4bc369e215ecdde5ee.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Radiant-Tampons-Duo-Pack-Regular-Super-Absorbency-Unscented-38-Ct/543758810",
    available: true,
  },
  {
    id: null,
    name: "l. organic cotton tampons regular/super absorbency duo pack, 30 ct",
    brand: "L.",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/70c1c507-7ba5-47ef-858b-ba3d07499b45.bea44471f5a2f8ded750c0cae8b4fbb9.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/L-Organic-Cotton-Tampons-Regular-Super-Absorbency-Duo-Pack-30-Ct/542075537",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl super plus plastic tampons, unscented, 50 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 10.47,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/d3b0d105-39b0-45fc-b6f1-e46c404f327c.951beb01f224b1cdc934c867ba3fe72c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Super-Plus-Plastic-Tampons-Unscented-50-Ct/55464532",
    available: true,
  },
  {
    id: null,
    name: "equate regular absorbency unscented tampons with plastic applicators, 20 ct",
    brand: "Equate",
    retailer: "Walmart",
    price: 3.17,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/c4480e06-f978-4190-a5fb-94a7d02556ad.0c66d02f14b9fa33863aa86ab2c3ad49.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Equate-Regular-Absorbency-Unscented-Tampons-with-Plastic-Applicators-20-Ct/17325304",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, ultra absorbency, unscented, 32 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 22.87,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/8a377642-034c-411d-a4d3-e3de7d021251.8c99c3a5117221bdd9da31ad2167bd28.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Ultra-Absorbency-Unscented-32-Count/502420664",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, with leakguard braid, ultra absorbency, unscented, 45 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 30.52,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/f4259fbb-e6b6-47f1-8083-27d77da3f96f.516d2b2661b4dcf024646e90609ade61.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-with-LeakGuard-Braid-Ultra-Absorbency-Unscented-45-Count/265318687",
    available: true,
  },
  {
    id: null,
    name: "equate unscented tampons with cardboard applicator - light, regular, super - 54 ct",
    brand: "Equate",
    retailer: "Walmart",
    price: 6.17,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/697c7377-6561-4173-8e90-4efeae3fd823.3ac79d221438533533ae82d80ff3bb06.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Equate-Unscented-Tampons-With-Cardboard-Applicator-Light-Regular-Super-54-Ct/10423601",
    available: false,
  },
  {
    id: null,
    name: "tampax pearl tampons multi-pack, light/regular/super absorbency, 34 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/e65d6c9f-a138-4b3f-9329-55c0a43d8ddf.b9b5647afdb0a18a2305c4dcfa070476.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Multi-Pack-Light-Regular-Super-Absorbency-34-Ct/148537714",
    available: true,
  },
  {
    id: null,
    name: "playtex sport regular plastic applicator unscented tampons, 36 ct, 360 degree sport level period protection, traps leaks, no-slip grip applicator, moves with you",
    brand: "Playtex",
    retailer: "Walmart",
    price: 7.48,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/1ac615a1-5327-4dfc-a09c-149deb50bc1d.52093975f021bd3627b67c10ebcf0fda.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Playtex-Sport-Regular-Plastic-Applicator-Unscented-Tampons-36-Ct-360-Degree-Level-Period-Protection-Traps-Leaks-No-Slip-Grip-Applicator-Moves-With-Yo/17018164",
    available: true,
  },
  {
    id: null,
    name: "playtex sport super plastic applicator tampons, 36 ct, 360 degree sport level period protection, no-slip grip applicator",
    brand: "Playtex",
    retailer: "Walmart",
    price: 7.48,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/42e7a6c2-1aad-4032-b9fb-a88bb96b0adb.32a74ba3260dd246cf5f8e729c6d29dc.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Playtex-Sport-Super-Plastic-Applicator-Tampons-36-Ct-360-Degree-Sport-Level-Period-Protection-No-Slip-Grip-Applicator/17325209",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons trio pack, with leakguard braid, regular/super/super plus absorbency, unscented, 34 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/b73b6669-e513-494b-bb32-81773610ed91.762cb104a964416ecb076d4b920800f2.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Trio-Pack-with-LeakGuard-Braid-Regular-Super-Super-Plus-Absorbency-Unscented-34-Count/119056996",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl regular absorbency plastic tampons, unscented, 50 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 10.47,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/001897f8-e173-49a7-b25c-1a635fada4e1.22e3431be606e0faef17be949b7c9bcc.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Regular-Absorbency-Plastic-Tampons-Unscented-50-Ct/183855729",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl super absorbency plastic tampons, unscented, 50 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 10.47,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a6b63806-4740-4248-a7ce-ab401b814f4c.245f301e400fd1f8deb19fa2fc61e3fe.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Super-Absorbency-Plastic-Tampons-Unscented-50-Ct/10850092",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons, super plus absorbency, unscented, 36 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/d3b0d105-39b0-45fc-b6f1-e46c404f327c.951beb01f224b1cdc934c867ba3fe72c.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Super-Plus-Absorbency-Unscented-36-Ct/15580481",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons light absorbency, unscented, 36 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/3972880f-2cff-4b8c-8bcf-edd64c5ecca7.0a5795c2f67404a10cffb9c6411c9697.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Light-Absorbency-Unscented-36-Count/10849162",
    available: true,
  },
  {
    id: null,
    name: "u by kotex click compact tampons, super plus, unscented, 32 count",
    brand: "Kotex",
    retailer: "Walmart",
    price: 7.12,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/6654a90b-781a-4be5-8251-f3b0be6609d3.ebd6c2b58a3abdb65c02d613bf557bdb.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/U-by-Kotex-Click-Compact-Tampons-Super-Plus-Unscented-32-Count/484763567",
    available: true,
  },
  {
    id: null,
    name: "l. organic cotton tampons, regular absorbency, 30 count",
    brand: "L.",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/7296e22c-fd0c-482d-8e51-863786b4e495.ae5df4099229d776dff182c67aea0c25.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/L-Organic-Cotton-Tampons-Regular-Absorbency-30-Count/424258630",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl regular absorbency plastic tampons, unscented, 36 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/001897f8-e173-49a7-b25c-1a635fada4e1.22e3431be606e0faef17be949b7c9bcc.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Regular-Absorbency-Plastic-Tampons-Unscented-36-Ct/20468139",
    available: true,
  },
  {
    id: null,
    name: "tampax pure cotton tampons, duo pack regular/super absorbency, containing a 100% organic cotton core, 22 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/b04278a3-5101-4c99-994f-3d922e3fc0e3.02e1dedc507b48d5dd314079184bce93.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pure-Cotton-Tampons-Duo-Pack-Regular-Super-Absorbency-Containing-a-100-Organic-Cotton-Core-22-Ct/253023544",
    available: true,
  },
  {
    id: null,
    name: "equate super absorbency unscented tampons with plastic applicators, 36 ct",
    brand: "Equate",
    retailer: "Walmart",
    price: 5.77,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/d3c650d2-c7eb-45b8-9bd7-4075f0912431.6c817287b839ddea5c0cfb0965b1fdc6.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Equate-Super-Absorbency-Unscented-Tampons-with-Plastic-Applicators-36-Ct/10423619",
    available: true,
  },
  {
    id: null,
    name: "playtex sport plastic tampons, unscented, regular/super, 36 ct",
    brand: "Playtex",
    retailer: "Walmart",
    price: 7.48,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/ee5a74d1-c61a-405b-92b7-fb40e4d743e4_1.215e4a614d113304d98244ed2e6e6142.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Playtex-Sport-Plastic-Tampons-Unscented-Regular-Super-36-Ct/10293790",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons super absorbency, 36 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/6321f087-32fd-4a75-b2ce-90b56e61a0d0.8ac6383bc6917ea5d71125c7e1f0b5fe.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL: "/ip/Tampax-Pearl-Tampons-Super-Absorbency-36-Count/10313887",
    available: true,
  },
  {
    id: null,
    name: "tampax pearltampons, ultra absorbency, unscented, 18 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 4.67,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/8a377642-034c-411d-a4d3-e3de7d021251.8c99c3a5117221bdd9da31ad2167bd28.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-PearlTampons-Ultra-Absorbency-Unscented-18-Count/34899595",
    available: false,
  },
  {
    id: null,
    name: "equate regular absorbency unscented tampons with plastic applicators, 40 ct",
    brand: "Equate",
    retailer: "Walmart",
    price: 5.77,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/5bb1c2c3-5a09-4038-a311-67cc4ae555aa.c045b7c013a76e92048efbf5aa6c99fa.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Equate-Regular-Absorbency-Unscented-Tampons-with-Plastic-Applicators-40-Ct/10423611",
    available: true,
  },
  {
    id: null,
    name: "tampax pocket radiant duo pack, regular/super, unscented, 28 ct",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/a3c0f6cd-ba6b-4cc6-9b9a-dd25454aed0c.0728a7c91cc78077bb1d85bd515b303e.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pocket-Radiant-Duo-Pack-Regular-Super-Unscented-28-Ct/221524786",
    available: true,
  },
  {
    id: null,
    name: "tampax pearl tampons duo pack, with leakguard braid, regular/super absorbency, unscented, 34 count",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/cca4e4b4-9225-4a68-b87d-0a32f23786fb.d4200c444299983c08f56b2330775b6b.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pearl-Tampons-Duo-Pack-with-LeakGuard-Braid-Regular-Super-Absorbency-Unscented-34-Count/148927646",
    available: true,
  },
  {
    id: null,
    name: "tampax pure cotton tampons, contains 100% organic cotton core, super absorbency, 24 ct, unscented",
    brand: "Tampax",
    retailer: "Walmart",
    price: 7.97,
    quantity: null,
    imageURL:
      "https://i5.walmartimages.com/asr/df36161e-89da-4a42-8ec0-9a4898bcf95a.e2fefc0fb01cd2349c91eb78f9310eb0.jpeg?odnHeight=180&odnWidth=180&odnBg=ffffff",
    buyURL:
      "/ip/Tampax-Pure-Cotton-Tampons-Contains-100-Organic-Cotton-Core-Super-Absorbency-24-Ct-Unscented/748446549",
    available: true,
  },
];

export default products;
