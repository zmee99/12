const mongoose = require('mongoose');
const mongodb = ("mongodb+srv://pwavauotoxphih:aze789-06@cluster0.tsxaazg.mongodb.net/?retryWrites=true&w=majority");

async function Database() {
    await mongoose.set('strictQuery', true);
    await mongoose.connect(mongodb).then(async () => {
        console.log(`[ The Database Has Been Registered ]`);
    }).catch(async () => {
        console.log(`I can't Access The Database`);
    })
} Database();