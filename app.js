const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const ejs = require('ejs');
const fs = require('fs');

const cors = require('cors');
const natural = require('natural');
const path = require('path');
const jaroWinkler = require('jaro-winkler');

const crypto = require('crypto');
const nodemailer = require('nodemailer');

const { google } = require('googleapis');

const { v4: uuidv4 } = require('uuid');

const jwt = require('jsonwebtoken');

const bcrypt = require('bcrypt');

const session = require('express-session');

const cookieSession = require('cookie-session');

const app = express(); 

const PORT = 8080;

// set the view engine to ejs
app.set('view engine', 'ejs');


// static files
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// files path
const IndexPath = 'views/pages/index.ejs';

const homePath = 'views/pages/home.ejs';

const shopItemPath = 'views/pages/shop_item.ejs';

const mobileOtherPath = 'views/pages/mobile_shop_other.ejs';
const wideOtherPath = 'views/pages/wide_shop_other.ejs';


const signNavPath = 'views/pages/sign_nav.ejs';
const shopProductsPath = 'views/pages/shop_products.ejs';
const shopBrandsPath = 'views/pages/shop_brands.ejs';
const productDescPath = 'views/pages/product_desc.ejs';
const productSavePath = 'views/pages/product_save.ejs';
const buyPath = 'views/pages/buy.ejs';
const sellPath = 'views/pages/sell.ejs';
const loginPath = 'views/pages/login.ejs';
const signupPath = 'views/pages/signup.ejs';
const accountPath = 'views/pages/account.ejs';
const policyPath = 'views/pages/policy.ejs';
const messagePath = 'views/pages/message.ejs';
const searchPath = 'views/pages/search.ejs';
const forgotPath = 'views/pages/forgot.ejs';
const resetpinPath = 'views/pages/resetpin.ejs';


// files reading
const index = fs.readFileSync(IndexPath, 'utf8');

// account database
const data = fs.readFileSync('database/accountdb.json', 'utf8');
let jsData = JSON.parse(data);

// toyota database
const toyotaData = fs.readFileSync('database/toyota.json', 'utf8');
let jstoyotaData = JSON.parse(toyotaData);

// honda database
const hondaData = fs.readFileSync('database/honda.json', 'utf8');
let jshondaData = JSON.parse(hondaData);

// hyundai database
const hyundaiData = fs.readFileSync('database/hyundai.json', 'utf8');
let jshyundaiData = JSON.parse(hyundaiData);

// kia database
const kiaData = fs.readFileSync('database/kia.json', 'utf8');
let jskiaData = JSON.parse(kiaData);

// nissan database
const nissanData = fs.readFileSync('database/nissan.json', 'utf8');
let jsnissanData = JSON.parse(nissanData);

// ford database
const fordData = fs.readFileSync('database/ford.json', 'utf8');
let jsfordData = JSON.parse(fordData);

// mercedes database
const mercedesData = fs.readFileSync('database/mercedes.json', 'utf8');
let jsmercedesData = JSON.parse(mercedesData);

// bmw database
const bmwData = fs.readFileSync('database/bmw.json', 'utf8');
let jsbmwData = JSON.parse(bmwData);

// lexus database
const lexusData = fs.readFileSync('database/lexus.json', 'utf8');
let jslexusData = JSON.parse(lexusData);

// audi database
const audiData = fs.readFileSync('database/audi.json', 'utf8');
let jsaudiData = JSON.parse(audiData);

// volkswagen database
const volkswagenData = fs.readFileSync('database/volkswagen.json', 'utf8');
let jsvolkswagenData = JSON.parse(volkswagenData);

// rolls database
const rollsData = fs.readFileSync('database/rolls.json', 'utf8');
let jsrollsData = JSON.parse(rollsData);

// peugeot database
const peugeotData = fs.readFileSync('database/peugeot.json', 'utf8');
let jspeugeotData = JSON.parse(peugeotData);

// chevrolet database
const chevroletData = fs.readFileSync('database/chevrolet.json', 'utf8');
let jschevroletData = JSON.parse(chevroletData);

// mitsubishi database
const mitsubishiData = fs.readFileSync('database/mitsubishi.json', 'utf8');
let jsmitsubishiData = JSON.parse(mitsubishiData);

// land database
const landData = fs.readFileSync('database/land.json', 'utf8');
let jslandData = JSON.parse(landData);

// jeep database
const jeepData = fs.readFileSync('database/jeep.json', 'utf8');
let jsjeepData = JSON.parse(jeepData);

// porsche database
const porscheData = fs.readFileSync('database/porsche.json', 'utf8');
let jsporscheData = JSON.parse(porscheData);

// dodge database
const dodgeData = fs.readFileSync('database/dodge.json', 'utf8');
let jsdodgeData = JSON.parse(dodgeData);

// review database
const reviewData = fs.readFileSync('database/review.json', 'utf8');
let jsReviewData = JSON.parse(reviewData);


const home = fs.readFileSync(homePath, 'utf8');

const shopItem = fs.readFileSync(shopItemPath, 'utf8');

const mobileOther = fs.readFileSync(mobileOtherPath, 'utf8');
const wideOther = fs.readFileSync(wideOtherPath, 'utf8');


const signNav = fs.readFileSync(signNavPath, 'utf8');
const shopProducts = fs.readFileSync(shopProductsPath, 'utf8');
const shopBrands = fs.readFileSync(shopBrandsPath, 'utf8');
const productDesc = fs.readFileSync(productDescPath, 'utf8');
const productSave = fs.readFileSync(productSavePath, 'utf8');
const buy = fs.readFileSync(buyPath, 'utf8');
const sell = fs.readFileSync(sellPath, 'utf8');
const login = fs.readFileSync(loginPath, 'utf8');
const signup = fs.readFileSync(signupPath, 'utf8');
const account = fs.readFileSync(accountPath, 'utf8');
const policy = fs.readFileSync(policyPath, 'utf8');
const message = fs.readFileSync(messagePath, 'utf8');
const search = fs.readFileSync(searchPath, 'utf8');
const forgot = fs.readFileSync(forgotPath, 'utf8');
const resetpin = fs.readFileSync(resetpinPath, 'utf8');


const connectionString = "mongodb+srv://jeremiah:jeremiah@cluster0.iuvcnx1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

let client;
let db;
let collectionReviews;
let collectionUsers;

MongoClient.connect(connectionString, function(err, _client) {
  if (err) {
    console.error(`Error connecting to MongoDB: ${err}`);
    return;
  }
  console.log('Connected to MongoDB');
  client = _client;
  db = client.db('Rideswithjerry');
  collectionReviews = db.collection('RideswithjerryReviewcollection');
  collectionUsers = db.collection('Rideswithjerrycollection');

  // listen for requests
  app.listen(PORT, (err) =>  {
    if(err)  {
      console.log(err);
    }
    console.log(`Server is starting at port ${PORT}`);
  });
});


const tokenizer = new natural.WordTokenizer();
const stemmer = natural.PorterStemmer;

const knowledgeBase = {
  'hello': 'Hello dear, this is Intelligent_Jerry at your dealership, I hope you are doing well. Is there anything i can help you with?',
  'hi': 'Hello dear, this is Intelligent_Jerry at your dealership, I hope you are doing well. Is there anything i can help you with?',
  'Jerry': 'Hello dear, this is Intelligent_Jerry at your dealership, I hope you are doing well. Is there anything i can help you with?',
  'intelligent_jerry': 'Hello dear, this is Intelligent_Jerry at your dealership, I hope you are doing well. Is there anything i can help you with?',
  'ceo': 'The CEO of Rides.With.Jerry is OKWUDIRI JEREMIAH AKUMEFULE. He is a web developer and a great chemist. He has been into car dealership for a good number of years. You need his help? \n \n Contact him @ +234-7059489788',
  'who is the CEO': 'The CEO of Rides.With.Jerry is OKWUDIRI JEREMIAH AKUMEFULE. He is a web developer and a great chemist. He has been into car dealership for a good number of years. You need his help? \n \n Contact him @ +234-7059489788',
  'who is the author': 'The CEO of Rides.With.Jerry is OKWUDIRI JEREMIAH AKUMEFULE. He is a web developer and a great chemist. He has been into car dealership for a good number of years. You need his help? \n \n Contact him @ +234-7059489788',
  'what is a car': 'A car, also known as an automobile, is a wheeled motor vehicle used for transportation. It is designed to carry passengers and cargo, and is typically powered by an internal. It is a motor vehicle with room for a small number of passengers. It is designed to carry passengers and cargo, and is typically powered by an internal combustion engine or an electric motor. Cars come in a variety of shapes and sizes, from compact sedans to large SUVs, and can be used for a variety of purposes, from commuting to work to going on road trips.',
  'car': 'A car, also known as an automobile, is a wheeled motor vehicle used for transportation. It is designed to carry passengers and cargo, and is typically powered by an internal. It is a motor vehicle with room for a small number of passengers. It is designed to carry passengers and cargo, and is typically powered by an internal combustion engine or an electric motor. Cars come in a variety of shapes and sizes, from compact sedans to large SUVs, and can be used for a variety of purposes, from commuting to work to going on road trips.',
  'what is a computer': 'A computer is an electronic device that manipulates information, or data.',
  'computer': 'A computer is an electronic device that manipulates information, or data.',
  'how to buy a car': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'how to buy a new car': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'buy': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'car buy': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'car buying': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'buying a new car': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'car buying guide': '1. Define Your Needs: "How many passengers will the car seat?, Do you need cargo space or towing capacity?, Do you prefer a specific fuel type (gas, diesel, electric, hybrid)?, Do you have a preferred transmission type (automatic, manual, semi-automatic)?" \n \n 2. Set a Budget: "Decide on a maximum budget for the car purchase, Consider financing options and monthly payments, Factor in ongoing costs like insurance, fuel, maintenance, and repairs" \n \n 3. Research and Shortlist: "Use online resources like this website, Read reviews, compare features, and check safety ratings, Narrow down your options to 2-3 models that fit your needs and budget" \n \n 4. Inspect and Test Drive: "Check the car\'s history report and maintenance records, Look for any signs of damage or wear, Take the car for a spin to assess its performance, comfort, and features" \n \n 5. Negotiate and Finalize: "Know the market value of the car and make an informed offer, Be prepared to walk away if the deal isn\'t right, Review and understand the sales contract before signing"',
  'how to maintain a car': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'car maintainance': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'car care': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n >Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'care': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n >Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'maintainance': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n >Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'car maintainance tips': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'car maintainance rules': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'how to care for a car': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'care for a car': 'Spend just 10 minutes every month on these 5 simple tasks to keep your car running smoothly and prolong its lifespan: \n \n Check and top off fluids: Engine oil, coolant, transmission, and brake fluids. \n Inspect and clean air filters: Cabin and engine air filters to improve fuel efficiency and performance. \n Tire pressure and tread check: Proper pressure and tread depth can improve safety and fuel economy. \n Battery maintenance: Check terminals for corrosion and make sure the battery is securely fastened. \n Quick visual inspection: Look for signs of wear on belts, hoses, and wipers, and check for any unusual noises or leaks. \n \n By following this 10-minute rule, you\'ll be able to: \n \n Improve fuel efficiency and performance \n Reduce the risk of breakdowns and costly repairs \n Maintain your car\'s value and resale price \n Ensure a safer and more comfortable driving experience \n \n Remember, a well-maintained car is a happy car!',
  'what types of vehicles do you sell?': 'We sell a wide range of new and used cars, trucks, SUVs, and vans from various manufacturers.',
  'do you sell cars?': 'We sell a wide range of new and used cars, trucks, SUVs, and vans from various manufacturers.',
  'do you sell vehicles?': 'We sell a wide range of new and used cars, trucks, SUVs, and vans from various manufacturers.',
  'sell vehicles?': 'We sell a wide range of new and used cars, trucks, SUVs, and vans from various manufacturers.',
  'sell cars?': 'We sell a wide range of new and used cars, trucks, SUVs, and vans from various manufacturers.',
  'sell': 'We sell a wide range of new and used cars, trucks, SUVs, and vans from various manufacturers.',
  'how do I know if a car is right for me?': 'Our website allows you to filter search results by make, model, year, price, and features. You can also read reviews, check safety ratings, and view detailed vehicle descriptions to help you make an informed decision.',
  'how do I know if a vehicle is right for me?': 'Our website allows you to filter search results by make, model, year, price, and features. You can also read reviews, check safety ratings, and view detailed vehicle descriptions to help you make an informed decision.',
  'is the car good for me?': 'Our website allows you to filter search results by make, model, year, price, and features. You can also read reviews, check safety ratings, and view detailed vehicle descriptions to help you make an informed decision.',
  'should i buy the car?': 'Our website allows you to filter search results by make, model, year, price, and features. You can also read reviews, check safety ratings, and view detailed vehicle descriptions to help you make an informed decision.',
  'why should i buy the car?': 'Our website allows you to filter search results by make, model, year, price, and features. You can also read reviews, check safety ratings, and view detailed vehicle descriptions to help you make an informed decision.',
  'is buying the car a great choice for me?': 'Our website allows you to filter search results by make, model, year, price, and features. You can also read reviews, check safety ratings, and view detailed vehicle descriptions to help you make an informed decision.',
  'can I trade in my current vehicle?': 'Yes, we accept trade-ins! Our team will assess the value of your vehicle and provide you with a fair trade-in price.',
  'can I trade in my current car?': 'Yes, we accept trade-ins! Our team will assess the value of your vehicle and provide you with a fair trade-in price.',
  'is trade in available?': 'Yes, we accept trade-ins! Our team will assess the value of your vehicle and provide you with a fair trade-in price.',
  'trade in?': 'Yes, we accept trade-ins! Our team will assess the value of your vehicle and provide you with a fair trade-in price.',
  'what financing options are available?': 'We offer a variety of financing options through our partner lenders. Our finance team will work with you to find a plan that fits your budget and needs.',
  'financing options available?': 'We offer a variety of financing options through our partner lenders. Our finance team will work with you to find a plan that fits your budget and needs.',
  'financing option available?': 'We offer a variety of financing options through our partner lenders. Our finance team will work with you to find a plan that fits your budget and needs.',
  'financing options?': 'We offer a variety of financing options through our partner lenders. Our finance team will work with you to find a plan that fits your budget and needs.',
  'can I purchase a vehicle online?': 'Yes, you can purchase a vehicle online through our website. Our team will guide you through the process and ensure a smooth transaction.',
  'can I buy a vehicle online?': 'Yes, you can purchase a vehicle online through our website. Our team will guide you through the process and ensure a smooth transaction.',
  'buy car online?': 'Yes, you can purchase a vehicle online through our website. Our team will guide you through the process and ensure a smooth transaction.',
  'online car buying?': 'Yes, you can purchase a vehicle online through our website. Our team will guide you through the process and ensure a smooth transaction.',
  'how do I schedule a test drive?': 'You can schedule a test drive online or by contacting our dealership directly. We\'ll work with you to find a time that fits your schedule.',
  'schedule a test drive?': 'You can schedule a test drive online or by contacting our dealership directly. We\'ll work with you to find a time that fits your schedule.',
  'test drive?': 'You can schedule a test drive online or by contacting our dealership directly. We\'ll work with you to find a time that fits your schedule.',
  'inspection date?': 'You can schedule a test drive online or by contacting our dealership directly. We\'ll work with you to find a time that fits your schedule.',
  'car inspection?': 'You can schedule a test drive online or by contacting our dealership directly. We\'ll work with you to find a time that fits your schedule.',
  'when do i inspect the car?': 'You can schedule a test drive online or by contacting our dealership directly. We\'ll work with you to find a time that fits your schedule.',
  'what is the condition of the used vehicles?': 'Our used vehicles are thoroughly inspected and reconditioned to ensure they meet our high standards. We also provide vehicle history reports and maintenance records for transparency.',
  'condition of the used vehicles?': 'Our used vehicles are thoroughly inspected and reconditioned to ensure they meet our high standards. We also provide vehicle history reports and maintenance records for transparency.',
  'what is the condition of the nigerian used vehicles?': 'Our used vehicles are thoroughly inspected and reconditioned to ensure they meet our high standards. We also provide vehicle history reports and maintenance records for transparency.',
  'what is the condition of the used cars?': 'Our used vehicles are thoroughly inspected and reconditioned to ensure they meet our high standards. We also provide vehicle history reports and maintenance records for transparency.',
  'used vehicles condition?': 'Our used vehicles are thoroughly inspected and reconditioned to ensure they meet our high standards. We also provide vehicle history reports and maintenance records for transparency.',
  'do you offer any discounts or promotions?': 'Yes, we regularly offer discounts, promotions, and incentives on select vehicles. Check our website or contact us for current offers.',
  'please any discounts': 'Yes, we regularly offer discounts, promotions, and incentives on select vehicles. Check our website or contact us for current offers.',
  'discounts or promotions?': 'Yes, we regularly offer discounts, promotions, and incentives on select vehicles. Check our website or contact us for current offers.',
  'do you offer any promo?': 'Yes, we regularly offer discounts, promotions, and incentives on select vehicles. Check our website or contact us for current offers.',
  'are you on promo?': 'Yes, we regularly offer discounts, promotions, and incentives on select vehicles. Check our website or contact us for current offers.',
  'what if I have a question or concern after purchasing a vehicle?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n Is it urgent? please call +234-7059489788',
  'i have a complain?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n  Is it urgent? please call +234-7059489788',
  'complain?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n  Is it urgent? please call +234-7059489788',
  'vehicle complain?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n  Is it urgent? please call +234-7059489788',
  'vehicle having faults?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n  Is it urgent? please call +234-7059489788',
  'vehicle is fake?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n  Is it urgent? please call +234-7059489788',
  'fake vehicle?': 'Our customer service team is here to help. You can contact us through our website, phone, or email, and we\'ll respond promptly to address your concerns. \n \n  Is it urgent? please call +234-7059489788',
  'Can I have the car delivered to my home or office?': 'Yes, we offer delivery services to your home or office for a small fee.',
  'What kind of maintenance does this car require?': 'This car requires regular maintenance such as oil changes and tire rotations. We recommend following the manufacturer\'s recommended maintenance schedule to ensure the car runs smoothly and efficiently.',
  'Can I trade in my current car?': 'Yes, we accept trade-ins. We can give you an estimate of your trade-in value based on the make, model, and condition of your car.',
  'Are there any incentives or discounts available for this car?': 'Yes, we are currently offering 20% discount on this car. Additionally, there may be manufacturer incentives available that can further reduce the price.',
  'incentives?': 'Yes, we are currently offering 20% discount on this car. Additionally, there may be manufacturer incentives available that can further reduce the price.',
  'What is the condition of the car?': 'This car is in excellent condition, both inside and out. We have thoroughly cleaned and detailed the car to ensure it looks and feels like new.',
  'Is this car certified pre-owned?': 'Yes, this car is certified pre-owned, which means it has undergone a rigorous inspection and comes with a warranty.',
  'Has this car been in an accident?': 'According to the vehicle history report, this car has no accidents reported. However, we have thoroughly inspected the car and it has been certified as safe to drive.',
  'What is the monthly payment for this car?': 'The monthly payment for this car would be approximately 20% based on the financing terms.',
  'What is the down payment required for this car?': 'The down payment required for this car is 70%. However, we may be able to offer special financing options with a lower down payment.',
  'What are the financing options available for this car?': 'We offer a range of financing options including [list options, e.g. cash, financing through our partner banks, etc.]. Our financing team can work with you to find the best option for your needs.',
  'What is the warranty on this car?': 'This car comes with a 4-year or 100000-mile warranty, whichever comes first.',
  'What is the fuel efficiency of this car?': 'This car has an estimated fuel efficiency of 10 miles per gallon in the city and 8 miles per gallon on the highway.',
  'Is this car available for a test drive?': 'Yes, this car is available for a test drive. Would you like to schedule a test drive at your convenience?',
  'What are the features of this car?': 'This car comes with a range of features including [list features, e.g. heated seats, navigation system, etc.].',
  'What is the price of this car?': 'The price of this car is clearly stated in the shopping section, along with its features. However, we are currently running a promotion that can bring the price down. Would you like to know more about the promotion and how you can take advantage of it?',
  'Can I customize this car with additional features or options?': 'Yes, we offer a range of customization options for this car. Please contact us to discuss your specific needs and we\'ll be happy to provide a quote.',
  'Is this car available in other colors or trim levels?': 'Yes, this car is available in [list colors or trim levels]. Please contact us to check availability and pricing.',
  'Can I purchase this car online or do I need to visit a dealership?': 'You can purchase this car online or visit one of our dealerships. We offer a range of purchasing options to make it convenient for you.',
  'Can I get pre-approved for financing before I purchase this car?': 'Yes, we offer pre-approval for financing. Please contact our financing team to discuss your options and get pre-approved.',
  'What is the interest rate on financing for this car?': 'The interest rate on financing for this car varies depending on your credit score and other factors. Please contact our financing team to discuss your options and get a quote.',
  'Can I make payments online or do I need to mail a check?': 'You can make payments online or by mail. We also offer automatic payment options for your convenience.',
  'Can I get a vehicle history report for this car?': 'Yes, we provide a vehicle history report for every car we sell. Please contact us to request a report.',
  'Has this car been recalled by the manufacturer?': 'According to the manufacturer\'s records, this car has no recalls. However, we have thoroughly inspected the car and it has been certified as safe to drive.',
  'Can I get a mechanic\'s inspection report for this car?': 'Yes, we provide a mechanic\'s inspection report for every car we sell. Please contact us to request a report.',
  'Can I trade in my current car if it\'s not paid off?': 'Yes, we can work with you to trade in your current car even if it\'s not paid off. Please contact us to discuss your options.',
  'Are there any manufacturer incentives available for this car?': 'Yes, there may be manufacturer incentives available for this car. Please contact us to discuss your options and get a quote.',
  'Can I get my car serviced at any dealership or do I need to go to a specific one?': 'You can get your car serviced at any of our dealerships or at a certified service center. Please contact us to find a location near you.',
  'What is the maintenance schedule for this car?': 'The maintenance schedule for this car varies depending on the manufacturer\'s recommendations. Please contact us to get a maintenance schedule for your car.',
  'Can I purchase additional accessories for this car, such as floor mats or a car cover?': 'Yes, we offer a range of accessories for this car. Please contact us to discuss your options and get a quote.',
  'Is this car eligible for any tax credits or rebates?': 'Yes, this car may be eligible for tax credits or rebates. Please contact us to discuss your options and get more information.',
  'Can I get a tour of the car\'s features and systems?': 'Yes, we offer a comprehensive tour of the car\'s features and systems. Please contact us to schedule a tour.',
  'Can I refinance my car loan at a later date?': 'Yes, you can refinance your car loan at a later date. Please contact our financing team to discuss your options and get a quote.',
  'What is the penalty for early payoff of the car loan?': 'The penalty for early payoff of the car loan varies depending on the financing terms. Please contact our financing team to discuss your options and get a quote.',
  'Can I make bi-weekly payments instead of monthly payments?': 'Yes, you can make bi-weekly payments instead of monthly payments. Please contact our financing team to discuss your options and get a quote.',
  'Can I get a report on the car\'s previous owners?': 'Yes, we provide a report on the car\'s previous owners. Please contact us to request a report.',
  'Has this car been modified or customized in any way?': 'According to the vehicle history report, this car has no modifications or customizations. However, we have thoroughly inspected the car and it has been certified as safe to drive.',
  'Can I get a report on the car\'s maintenance history?': ' Yes, we provide a report on the car\'s maintenance history. Please contact us to request a report.',
  'Can I trade in my current car if it\'s a lease?': 'Yes, we can work with you to trade in your current car even if it\'s a lease. Please contact us to discuss your options.',
  'Are there any loyalty incentives available for repeat customers?': 'Yes, we offer loyalty incentives for repeat customers. Please contact us to discuss your options and get a quote.',
  'Can I get a discount for purchasing multiple cars at the same time?': 'Yes, we offer discounts for purchasing multiple cars at the same time. Please contact us to discuss your options and get a quote.',
  'Can I get my car delivered to a different state or country?': 'Yes, we offer delivery services to different states and countries. Please contact us to discuss your options and get a quote.',
  'What is the process for scheduling maintenance or repairs for my car?': 'We offer a range of maintenance and repair options for your car. Please contact us to schedule a service appointment.',
  'Can I get a loaner car while my car is being serviced?': ' Yes, we offer loaner cars while your car is being serviced. Please contact us to discuss your options and get a quote.',
  'car loan': ' Yes, we offer loaner cars services to customers. Please contact us to discuss your options and get a quote.',
  'loan': ' Yes, we offer loaner cars services to customers. Please contact us to discuss your options and get a quote.',
  'car rent': ' Yes, we offer renting cars services to customers. Please contact us to discuss your options and get a quote.',
  'rent': ' Yes, we offer renting cars services to customers. Please contact us to discuss your options and get a quote.'
};

 
// Compile the EJS template
const template = ejs.compile(index, { 
  filename: IndexPath           
});

const productDesctemplate = ejs.compile(productDesc, { 
  filename: productDescPath           
});

const signupTemplate = ejs.compile(signup, { 
  filename: signupPath           
});

const loginTemplate = ejs.compile(login, { 
  filename: loginPath           
});

const forgotTemplate = ejs.compile(forgot, { 
  filename: forgotPath           
});

const resetpinTemplate = ejs.compile(resetpin, { 
  filename: resetpinPath           
});

// Render the compiled template 
const html = template();

const productDescHtml = productDesctemplate({
  jsReviewData
});

const signupTemplateMain = signupTemplate({
  message: null,
});

const loginTemplateMain = loginTemplate({
  message: null
});

const forgotTemplateMain = forgotTemplate({
  message: null
});

function replacePlaceholders(htmlTemplate, databaseArray) {
  let resultHtml = '';
  databaseArray.forEach(databaseObject => {
    let tempHtml = htmlTemplate;
    tempHtml = tempHtml.replace("({% ID %})", databaseObject.id);
    tempHtml = tempHtml.replace("({% ID2 %})", databaseObject.id);
    tempHtml = tempHtml.replace("({% NAME %})", databaseObject.name);
    tempHtml = tempHtml.replace("({% NAME2 %})", databaseObject.name);
    tempHtml = tempHtml.replace("({% DESCRIPTION %})", databaseObject.description);
    tempHtml = tempHtml.replace("({% DESCRIPTION2 %})", databaseObject.description);
    tempHtml = tempHtml.replace("({% PRICE %})", databaseObject.price);
    tempHtml = tempHtml.replace("({% PRICE2 %})", databaseObject.price);
    tempHtml = tempHtml.replace("({% PRICE3 %})", databaseObject.price);
    tempHtml = tempHtml.replace("({% PRICE4 %})", databaseObject.price);
    tempHtml = tempHtml.replace("({% BRANDPRICE %})", databaseObject.brandprice);
    tempHtml = tempHtml.replace("({% BRANDPRICE2 %})", databaseObject.brandprice);
    tempHtml = tempHtml.replace("({% RATE %})", databaseObject.rate);
    tempHtml = tempHtml.replace("({% RATE2 %})", databaseObject.rate);
    tempHtml = tempHtml.replace("({% IMG_FRONT %})", databaseObject.imgFront);
    tempHtml = tempHtml.replace("({% IMG_FRONT2 %})", databaseObject.imgFront);
    tempHtml = tempHtml.replace("({% IMG_REAR %})", databaseObject.imgRear);
    tempHtml = tempHtml.replace("({% IMG_REAR2 %})", databaseObject.imgRear);
    tempHtml = tempHtml.replace("({% IMG_SIDE %})", databaseObject.imgSide);
    tempHtml = tempHtml.replace("({% IMG_SIDE2 %})", databaseObject.imgSide2);
    tempHtml = tempHtml.replace("({% IMG_SIDE3 %})", databaseObject.imgSide); 
    tempHtml = tempHtml.replace("({% IMG_SIDE4 %})", databaseObject.imgSide2);
    tempHtml = tempHtml.replace("({% IMG_INTERIOR %})", databaseObject.imgInterior);
    tempHtml = tempHtml.replace("({% IMG_INTERIOR2 %})", databaseObject.imgInterior);
    tempHtml = tempHtml.replace("({% IMG_DASHBOARD %})", databaseObject.imgDashboard);
    tempHtml = tempHtml.replace("({% IMG_DASHBOARD2 %})", databaseObject.imgDashboard);
    tempHtml = tempHtml.replace("({% IMG_SEAT %})", databaseObject.imgSeat);
    tempHtml = tempHtml.replace("({% IMG_SEAT2 %})", databaseObject.imgSeat2);
    tempHtml = tempHtml.replace("({% IMG_SEAT3 %})", databaseObject.imgSeat);
    tempHtml = tempHtml.replace("({% IMG_SEAT4 %})", databaseObject.imgSeat2);
    tempHtml = tempHtml.replace("({% IMG_TRUNK %})", databaseObject.imgTrunk);
    tempHtml = tempHtml.replace("({% IMG_TRUNK2 %})", databaseObject.imgTrunk);
    tempHtml = tempHtml.replace("({% IMG_WHEEL %})", databaseObject.imgWheel);
    tempHtml = tempHtml.replace("({% IMG_WHEEL2 %})", databaseObject.imgWheel);

    resultHtml += tempHtml;
  });

  return resultHtml;
}


app.use(session({
  secret: '08063452207je',
  resave: false,
  saveUninitialized: true,
  cookie: {
    secure: false,
    maxAge: 3600000
  }
}));

app.use(cookieSession({
  name: 'session',
  keys: ['key1', 'key2'],
  maxAge: 24 * 60 * 60 * 1000
}));


app.use((err, req, res, next) => {
  console.error(`Error: ${err}`);
  res.status(500).json({ error: 'Internal Server Error' });
});


 
// index page   
app.get('/home', function(req, res) {  
  let response = html.replace("({% INDEX_MAIN %})", home);
 
  res.send(response);
});

app.get('/more', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", signNav);

  res.send(response);
});

app.get('/shop-brands', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", shopBrands);

  res.send(response);
});

app.get('/shop-products', (req, res) => {

  if (req.query.id === 'toyota') {

    let homeImg = 'gallery/brands_rated/toyota.jpg';
    let hometxt = 'Toyota\'s Home';

    let toyotaShopItemHtml = replacePlaceholders(shopItem, jstoyotaData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", toyotaShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", toyotaShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'honda') {

    let homeImg = 'gallery/brands_rated/honda.jpg';
    let hometxt = 'Honda\'s Home';

    let hondaShopItemHtml = replacePlaceholders(shopItem, jshondaData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", hondaShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", hondaShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'hyundai') {

    let homeImg = 'gallery/brands_rated/hyundai.jpg';
    let hometxt = 'Hyundai\'s Home';

    let hyundaiShopItemHtml = replacePlaceholders(shopItem, jshyundaiData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", hyundaiShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", hyundaiShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'kia') {

    let homeImg = 'gallery/brands_rated/kia.jpg';
    let hometxt = 'Kia\'s Home';

    let kiaShopItemHtml = replacePlaceholders(shopItem, jskiaData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", kiaShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", kiaShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'nissan') {

    let homeImg = 'gallery/brands_rated/nissan.jpg';
    let hometxt = 'Nissan\'s Home';

    let nissanShopItemHtml = replacePlaceholders(shopItem, jsnissanData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", nissanShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", nissanShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'ford') {

    let homeImg = 'gallery/brands_rated/ford.jpg';
    let hometxt = 'Ford\'s Home';

    let fordShopItemHtml = replacePlaceholders(shopItem, jsfordData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", fordShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", fordShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'mercedes') {

    let homeImg = 'gallery/brands_rated/mercedes.jpg';
    let hometxt = 'Mercedes Home';

    let mercedesShopItemHtml = replacePlaceholders(shopItem, jsmercedesData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", mercedesShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", mercedesShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'bmw') {

    let homeImg = 'gallery/brands_rated/bmw.jpg';
    let hometxt = 'Bmw Home';

    let bmwShopItemHtml = replacePlaceholders(shopItem, jsbmwData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", bmwShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", bmwShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'lexus') {

    let homeImg = 'gallery/brands_rated/lexus.jpg';
    let hometxt = 'Lexus Home';

    let lexusShopItemHtml = replacePlaceholders(shopItem, jslexusData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", lexusShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", lexusShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'audi') {

    let homeImg = 'gallery/brands_rated/audi.jpg';
    let hometxt = 'Audi\'s Home';

    let audiShopItemHtml = replacePlaceholders(shopItem, jsaudiData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", audiShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", audiShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'volkswagen') {

    let homeImg = 'gallery/brands_rated/volkswagen.jpg';
    let hometxt = 'Volkswagen Home';

    let volkswagenShopItemHtml = replacePlaceholders(shopItem, jsvolkswagenData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", volkswagenShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", volkswagenShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'rolls') {

    let homeImg = 'gallery/brands_rated/rolls_royce.jpg';
    let hometxt = 'Rolls-Royce Home';

    let rollsShopItemHtml = replacePlaceholders(shopItem, jsrollsData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", rollsShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", rollsShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'peugeot') {

    let homeImg = 'gallery/brands_rated/peugeot.jpg';
    let hometxt = 'Peugeot\'s Home';

    let peugeotShopItemHtml = replacePlaceholders(shopItem, jspeugeotData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", peugeotShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", peugeotShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'chevrolet') {

    let homeImg = 'gallery/brands_rated/chevrolet.jpg';
    let hometxt = 'Chevrolet\'s Home';

    let chevroletShopItemHtml = replacePlaceholders(shopItem, jschevroletData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", chevroletShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", chevroletShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'mitsubishi') {

    let homeImg = 'gallery/brands_rated/mitsubishi.jpg';
    let hometxt = 'Mitsubishi\'s Home';

    let mitsubishiShopItemHtml = replacePlaceholders(shopItem, jsmitsubishiData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", mitsubishiShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", mitsubishiShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'land') {

    let homeImg = 'gallery/brands_rated/land.jpg';
    let hometxt = 'Land Rover\'s Home';

    let landShopItemHtml = replacePlaceholders(shopItem, jslandData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", landShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", landShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'jeep') {

    let homeImg = 'gallery/brands_rated/jeep.jpg';
    let hometxt = 'Jeep\'s Home';

    let jeepShopItemHtml = replacePlaceholders(shopItem, jsjeepData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", jeepShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", jeepShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'porsche') {

    let homeImg = 'gallery/brands_rated/porsche.jpg';
    let hometxt = 'Porsche Home';

    let porscheShopItemHtml = replacePlaceholders(shopItem, jsporscheData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", porscheShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", porscheShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else if (req.query.id === 'dodge') {

    let homeImg = 'gallery/brands_rated/dodge.jpg';
    let hometxt = 'Dodge Home';

    let dodgeShopItemHtml = replacePlaceholders(shopItem, jsdodgeData);

    let shopProductsHtml1 = shopProducts.replace("({% WIDE_SHOP_ITEM %})", dodgeShopItemHtml);
    let shopProductsHtml2 = shopProductsHtml1.replace("({% MOBILE_SHOP_ITEM %})", dodgeShopItemHtml);
    let shopProductsHtml3 = shopProductsHtml2.replace("({% HOME_IMG %})", homeImg);
    let shopProductsHtml4 = shopProductsHtml3.replace("({% HOME_IMG2 %})", homeImg);
    let shopProductsHtml5 = shopProductsHtml4.replace("({% HOME_TXT %})", hometxt);
    let shopProductsHtml6 = shopProductsHtml5.replace("({% HOME_TXT2 %})", hometxt);

    let response = html.replace("({% INDEX_MAIN %})", shopProductsHtml6);

    res.send(response);
  } else {
    res.redirect('/home');
  }
}); 

app.get('/product-desc', function(req, res) {

  if (!req.query.id) {
    res.redirect('/home');
  }

  let checkToyotaId = jstoyotaData.filter(obj =>
    obj.id === req.query.id
  );

  let checkHondaId = jshondaData.filter(obj =>
    obj.id === req.query.id
  );

  let checkHyundaiId = jshyundaiData.filter(obj =>
    obj.id === req.query.id
  );

  let checkKiaId = jskiaData.filter(obj =>
    obj.id === req.query.id
  );

  let checkNissanId = jsnissanData.filter(obj =>
    obj.id === req.query.id
  );

  let checkFordId = jsfordData.filter(obj =>
    obj.id === req.query.id
  );

  let checkMercedesId = jsmercedesData.filter(obj =>
    obj.id === req.query.id
  );

  let checkBmwId = jsbmwData.filter(obj =>
    obj.id === req.query.id
  );

  let checkLexusId = jslexusData.filter(obj =>
    obj.id === req.query.id
  );

  let checkAudiId = jsaudiData.filter(obj =>
    obj.id === req.query.id
  );

  let checkVolkswagenId = jsvolkswagenData.filter(obj =>
    obj.id === req.query.id
  );

  let checkRollsId = jsrollsData.filter(obj =>
    obj.id === req.query.id
  );

  let checkPeugeotId = jspeugeotData.filter(obj =>
    obj.id === req.query.id
  );

  let checkChevroletId = jschevroletData.filter(obj =>
    obj.id === req.query.id
  );

  let checkMitsubishiId = jsmitsubishiData.filter(obj =>
    obj.id === req.query.id
  );

  let checkLandId = jslandData.filter(obj =>
    obj.id === req.query.id
  );

  let checkJeepId = jsjeepData.filter(obj =>
    obj.id === req.query.id
  );

  let checkPorscheId = jsporscheData.filter(obj =>
    obj.id === req.query.id
  );

  let checkDodgeId = jsdodgeData.filter(obj =>
    obj.id === req.query.id
  );

  if(checkToyotaId.length > 0)  {
    let toyotaIdHtml = replacePlaceholders(productDescHtml, checkToyotaId);

    let toyotaMobileOtherHtml = replacePlaceholders(mobileOther, jstoyotaData);

    let toyotaWideOtherHtml = replacePlaceholders(wideOther, jstoyotaData);

    let mobileResponse = toyotaIdHtml.replace("({% MOBILE_OTHER %})", toyotaMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", toyotaWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response); 
  } else if (checkHondaId.length > 0)  {
    let hondaIdHtml = replacePlaceholders(productDescHtml, checkHondaId);

    let hondaMobileOtherHtml = replacePlaceholders(mobileOther, jshondaData);

    let hondaWideOtherHtml = replacePlaceholders(wideOther, jshondaData);

    let mobileResponse = hondaIdHtml.replace("({% MOBILE_OTHER %})", hondaMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", hondaWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkHyundaiId.length > 0)  {
    let hyundaiIdHtml = replacePlaceholders(productDescHtml, checkHyundaiId);

    let hyundaiMobileOtherHtml = replacePlaceholders(mobileOther, jshyundaiData);

    let hyundaiWideOtherHtml = replacePlaceholders(wideOther, jshyundaiData);

    let mobileResponse = hyundaiIdHtml.replace("({% MOBILE_OTHER %})", hyundaiMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", hyundaiWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse); 

    res.send(response);
  } else if (checkKiaId.length > 0)  {
    let kiaIdHtml = replacePlaceholders(productDescHtml, checkKiaId);

    let kiaMobileOtherHtml = replacePlaceholders(mobileOther, jskiaData); 

    let kiaWideOtherHtml = replacePlaceholders(wideOther, jskiaData);

    let mobileResponse = kiaIdHtml.replace("({% MOBILE_OTHER %})", kiaMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", kiaWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse); 

    res.send(response);
  } else if (checkNissanId.length > 0)  {
    let nissanIdHtml = replacePlaceholders(productDescHtml, checkNissanId);

    let nissanMobileOtherHtml = replacePlaceholders(mobileOther, jsnissanData);

    let nissanWideOtherHtml = replacePlaceholders(wideOther, jsnissanData);

    let mobileResponse = nissanIdHtml.replace("({% MOBILE_OTHER %})", nissanMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", nissanWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse); 

    res.send(response); 
  } else if (checkFordId.length > 0)  {
    let fordIdHtml = replacePlaceholders(productDescHtml, checkFordId);

    let fordMobileOtherHtml = replacePlaceholders(mobileOther, jsfordData);

    let fordWideOtherHtml = replacePlaceholders(wideOther, jsfordData);

    let mobileResponse = fordIdHtml.replace("({% MOBILE_OTHER %})", fordMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", fordWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse); 

    res.send(response);
  } else if (checkMercedesId.length > 0)  {
    let mercedesIdHtml = replacePlaceholders(productDescHtml, checkMercedesId);

    let mercedesMobileOtherHtml = replacePlaceholders(mobileOther, jsmercedesData);

    let mercedesWideOtherHtml = replacePlaceholders(wideOther, jsmercedesData);

    let mobileResponse = mercedesIdHtml.replace("({% MOBILE_OTHER %})", mercedesMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", mercedesWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse); 

    res.send(response);
  } else if (checkBmwId.length > 0)  {
    let bmwIdHtml = replacePlaceholders(productDescHtml, checkBmwId);

    let bmwMobileOtherHtml = replacePlaceholders(mobileOther, jsbmwData);

    let bmwWideOtherHtml = replacePlaceholders(wideOther, jsbmwData);

    let mobileResponse = bmwIdHtml.replace("({% MOBILE_OTHER %})", bmwMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", bmwWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkLexusId.length > 0)  {
    let lexusIdHtml = replacePlaceholders(productDescHtml, checkLexusId);

    let lexusMobileOtherHtml = replacePlaceholders(mobileOther, jslexusData);

    let lexusWideOtherHtml = replacePlaceholders(wideOther, jslexusData);

    let mobileResponse = lexusIdHtml.replace("({% MOBILE_OTHER %})", lexusMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", lexusWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkAudiId.length > 0)  {
    let audiIdHtml = replacePlaceholders(productDescHtml, checkAudiId);

    let audiMobileOtherHtml = replacePlaceholders(mobileOther, jsaudiData);

    let audiWideOtherHtml = replacePlaceholders(wideOther, jsaudiData);

    let mobileResponse = audiIdHtml.replace("({% MOBILE_OTHER %})", audiMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", audiWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkVolkswagenId.length > 0)  {
    let volkswagenIdHtml = replacePlaceholders(productDescHtml, checkVolkswagenId);

    let volkswagenMobileOtherHtml = replacePlaceholders(mobileOther, jsvolkswagenData);

    let volkswagenWideOtherHtml = replacePlaceholders(wideOther, jsvolkswagenData);

    let mobileResponse = volkswagenIdHtml.replace("({% MOBILE_OTHER %})", volkswagenMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", volkswagenWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkRollsId.length > 0)  {
    let rollsIdHtml = replacePlaceholders(productDescHtml, checkRollsId);

    let rollsMobileOtherHtml = replacePlaceholders(mobileOther, jsrollsData);

    let rollsWideOtherHtml = replacePlaceholders(wideOther, jsrollsData);

    let mobileResponse = rollsIdHtml.replace("({% MOBILE_OTHER %})", rollsMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", rollsWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkPeugeotId.length > 0)  {
    let peugeotIdHtml = replacePlaceholders(productDescHtml, checkPeugeotId);

    let peugeotMobileOtherHtml = replacePlaceholders(mobileOther, jspeugeotData);

    let peugeotWideOtherHtml = replacePlaceholders(wideOther, jspeugeotData);

    let mobileResponse = peugeotIdHtml.replace("({% MOBILE_OTHER %})", peugeotMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", peugeotWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkChevroletId.length > 0)  {
    let chevroletIdHtml = replacePlaceholders(productDescHtml, checkChevroletId);

    let chevroletMobileOtherHtml = replacePlaceholders(mobileOther, jschevroletData);

    let chevroletWideOtherHtml = replacePlaceholders(wideOther, jschevroletData);

    let mobileResponse = chevroletIdHtml.replace("({% MOBILE_OTHER %})", chevroletMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", chevroletWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkMitsubishiId.length > 0)  {
    let mitsubishiIdHtml = replacePlaceholders(productDescHtml, checkMitsubishiId);

    let mitsubishiMobileOtherHtml = replacePlaceholders(mobileOther, jsmitsubishiData);

    let mitsubishiWideOtherHtml = replacePlaceholders(wideOther, jsmitsubishiData);

    let mobileResponse = mitsubishiIdHtml.replace("({% MOBILE_OTHER %})", mitsubishiMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", mitsubishiWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkLandId.length > 0)  {
    let landIdHtml = replacePlaceholders(productDescHtml, checkLandId);

    let landMobileOtherHtml = replacePlaceholders(mobileOther, jslandData);

    let landWideOtherHtml = replacePlaceholders(wideOther, jslandData);

    let mobileResponse = landIdHtml.replace("({% MOBILE_OTHER %})", landMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", landWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkJeepId.length > 0)  {
    let jeepIdHtml = replacePlaceholders(productDescHtml, checkJeepId);

    let jeepMobileOtherHtml = replacePlaceholders(mobileOther, jsjeepData);

    let jeepWideOtherHtml = replacePlaceholders(wideOther, jsjeepData);

    let mobileResponse = jeepIdHtml.replace("({% MOBILE_OTHER %})", jeepMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", jeepWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkPorscheId.length > 0)  {
    let porscheIdHtml = replacePlaceholders(productDescHtml, checkPorscheId);

    let porscheMobileOtherHtml = replacePlaceholders(mobileOther, jsporscheData);

    let porscheWideOtherHtml = replacePlaceholders(wideOther, jsporscheData);

    let mobileResponse = porscheIdHtml.replace("({% MOBILE_OTHER %})", porscheMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", porscheWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  } else if (checkDodgeId.length > 0)  {
    let dodgeIdHtml = replacePlaceholders(productDescHtml, checkDodgeId);

    let dodgeMobileOtherHtml = replacePlaceholders(mobileOther, jsdodgeData);

    let dodgeWideOtherHtml = replacePlaceholders(wideOther, jsdodgeData);

    let mobileResponse = dodgeIdHtml.replace("({% MOBILE_OTHER %})", dodgeMobileOtherHtml);

    let wideResponse = mobileResponse.replace("({% WIDE_OTHER %})", dodgeWideOtherHtml);

    let response = html.replace("({% INDEX_MAIN %})", wideResponse);

    res.send(response);
  }

});

app.get('/product-save', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", productSave);

  res.send(response);
});

app.get('/buy', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", buy);

  res.send(response);
});

app.get('/sell', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", sell);

  res.send(response);
});

app.get('/login', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", loginTemplateMain);

  res.send(response);
});

app.get('/signup', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", signupTemplateMain);

  res.send(response);
});

app.get('/my-account', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", account);

  res.send(response);
});

app.get('/policy', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", policy);

  res.send(response);
});

app.get('/search', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", search);

  res.send(response); 
});

app.get('/message', (req, res) => {
  let response = html.replace("({% INDEX_MAIN %})", message);

  res.send(response);
});

app.post('/api/query', async (req, res) => {
  const question = req.body.question.toLowerCase();
  const tokens = tokenizer.tokenize(question);
  const stemmedTokens = tokens.map(stemmer.stem);

  const normalizedQuestion = stemmedTokens.join(' ');

  let closestMatch = null;
  let closestSimilarity = 0;
  for (const key in knowledgeBase) {
    const similarity = jaroWinkler(normalizedQuestion, key);
    if (similarity > closestSimilarity) {
      closestMatch = key;
      closestSimilarity = similarity;
    }
  }

  if (closestMatch) {
    res.json({ response: knowledgeBase[closestMatch] });
  } else {
    res.json({ response: 'I don\'t know the answer to that question.' });
  }
});


app.post('/signup', (req, res) => {

  function Person(id, username, email, country, city, contact, psw) {
    this.id = id;
    this.username = username;
    this.email = email;
    this.country = country;
    this.city = city;
    this.contact = contact;
    this.psw = psw;
  }

  const hashedPsw = bcrypt.hashSync(req.body.psw, 10);

  let person = new Person(uuidv4(), req.body.username, req.body.email, req.body.country, req.body.city, req.body.contact, hashedPsw);

  collectionUsers.find({ $or: [{ email: req.body.email }, { username: req.body.username }] }).toArray((err, result) => {
    if (err) {
      console.error(`Error finding user: ${err}`);
      return;
    }

    if (result.length > 0) {
      if (result.find(obj => obj.email === req.body.email && obj.username === req.body.username)) {
        res.send("Email Address and Username already exists!, you might want to login...");
      } else if (result.find(obj => obj.email === req.body.email)) {
        res.send("Email Address already exists!, you might want to login...");
      } else if (result.find(obj => obj.username === req.body.username)) {
        res.send("Username already exists!, you might want to login...");
      }
    } else {
      collectionUsers.insertOne(person, (err, result) => {
        if (err) {
          console.error(`Error inserting user: ${err}`);
          res.status(500).send({ message: 'Error inserting user' });
        } else {
          console.log('User added successfully!');
          res.redirect('/home');
        }
      });
    }
  });
});

app.post('/login', (req, res) => {
  collectionUsers.findOne({ email: req.body.email }, (err, result) => {
    if (err) {
      console.error(`Error finding user: ${err}`);
      return;
    }

    if (result) {
      const isValidPsw = bcrypt.compareSync(req.body.psw, result.psw);
      if (isValidPsw) {
        console.log("Yes");
        res.redirect('/home');
      } else {
        console.log("No");
        res.send("Invalid Email Address Or Wrong Password!");
      }
    } else {
      console.log("No");
      res.send("Invalid Email Address Or Wrong Password!");
    }
  });
});

app.get('/resetoption', function(req, res) {
  let response = html.replace("({% INDEX_MAIN %})", forgotTemplateMain); 

  res.send(response);
});

app.post('/resetoption', (req, res) =>  {

  let comparedEmail = jsData.find(obj =>
    obj.email === req.body.email
  );

  if(comparedEmail)  { 
    console.log("Yes")
    res.redirect(`/resetpin?id=${req.body.email}`);
  } else  {
    console.log("No");

      const forgotHtml = forgotTemplate({
        message: "Invalid Email Address!"
      });

      let response = html.replace("({% INDEX_MAIN %})", forgotHtml);

      res.send(response);
    }
});


const oauth2Client = new google.auth.OAuth2(
  '468371157388-ldnl0bac6vcbqjd7etafcpk3848er5g9.apps.googleusercontent.com',
  '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',
  'https://www.rideswithjerry.com'
);

const authorizationUrl = oauth2Client.generateAuthUrl({
  access_type: 'offline',
  scope: ['https://mail.google.com/']
});

app.get('/resetpin', function(req, res) {

  const resetpinTemplateMain = resetpinTemplate({
    message: null,
    email: req.query.id
  });

  let response = html.replace("({% INDEX_MAIN %})", resetpinTemplateMain);

  function generateRandomNumber() {
    return crypto.randomInt(100000, 999999);
  }

  async function sendEmail(recipientEmail, randomNumber) {

    const authorizationCode = 'THE_AUTHORIZATION_CODE_FROM_STEP_6';

    const { tokens } = await oauth2Client.getToken(authorizationCode);
    const refreshToken = tokens.refresh_token;

    oauth2Client.setCredentials({ refresh_token: refreshToken });


    const accessToken = await oauth2Client.getAccessToken();

      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          type: 'OAuth2',
          user: 'rideswithjerry@gmail.com',
          clientId: '468371157388-ldnl0bac6vcbqjd7etafcpk3848er5g9.apps.googleusercontent.com',
          clientSecret: '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',
          refreshToken: refreshToken,
          accessToken: accessToken
        }
      });

      let mailOptions = {
        from: '"Rides.With.Jerry" <no-reply@rideswithjerry.com>',
        to: `${req.query.id}`,
        subject: 'Your Password Reset Code',
        text: `Your password reset code is: ${randomNumber}`,
        html: `
            <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                <div style="padding: 20px; max-width: 600px; margin: 0 auto; background-color: #f7f7f7; border: 1px solid #e0e0e0;">
                    <h2 style="color: #007bff;">Password Reset Request</h2>
                    <p>Dear User,</p>
                    <p>You recently requested to reset your password for your account. Please use the following code to complete the process:</p>
                    <div style="font-size: 24px; font-weight: bold; color: #007bff; margin: 20px 0;">
                        ${randomNumber}
                    </div>
                    <p>If you did not request a password reset, please ignore this email or contact support if you have questions.</p>
                    <p>Thank you,<br>Your Company Name</p>
                    <hr style="border: none; border-top: 1px solid #e0e0e0;" />
                    <p style="font-size: 12px; color: #777;">This is an automated message, please do not reply. If you need assistance, contact us at <a href="mailto:rideswithjerry@gmail.com" style="color: #007bff;">support@rideswithjerry.com</a>.</p>
                </div>
            </div>
        `,
        headers: {
            'X-Company-ID': '12345678',
            'X-Priority': '1 (Highest)',
            'Importance': 'High'
        },
        replyTo: 'rideswithjerry@gmail.com',
        attachments: [
            {
                filename: 'CompanyLogo.ico',
                path: 'public/gallery/favicon.ico',
                cid: 'rideswithjerry@gmail.com'
            }
        ]
    };

  await transporter.sendMail(mailOptions);
}

async function sendResetCode(email) {
  const randomNumber = generateRandomNumber();
  await sendEmail(email, randomNumber);
  console.log(`Password reset code ${randomNumber} sent to ${email}`);
    
  return randomNumber;
}

const email = `${req.query.id}`;
sendResetCode(email)
  .then(code => {
    console.log(`Stored reset code: ${code}`);
  })
  .catch(err => {
    console.error('Error sending email:', err);
  });

  res.send(response);
    
});


app.post('/review', (req, res) => {
  function Person(username, thoughts, date) {
    this.username = username;  
    this.thoughts = thoughts;
    this.date = date;
  }

  let person = new Person(req.body.username, req.body.thoughts, req.body.date);

  collectionReviews.insertOne(person, (err, result) => {
    if (err) {
      console.error(`Error inserting review: ${err}`);
      res.status(500).send({ message: 'Error inserting review' });
    } else {
      console.log('Review added successfully!');
      res.redirect(`/product-desc?id=${req.query.id}`);
    }
  });
});


app.use((req, res) =>  {
  res.redirect('/home');
});

