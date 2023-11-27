const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to MongoDB
mongodb+srv://chibolyoc:<@Chizwe123.>@cluster0.oc2ngux.mongodb.net/URA?retryWrites=true&w=majority
mongoose.connect('mongodb://localhost:27017/URA, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define Schema Models
// Define Tax Payer Schema and Asset Schema using mongoose.Schema

const TaxPayer = mongoose.model('TaxPayer', taxPayerSchema);
const Asset = mongoose.model('Asset', assetSchema);

// API Endpoints
app.post('/registerTaxPayer', (req, res) => {
    // Logic to handle registration of Tax Payer
    // Create a new TaxPayer instance and save to MongoDB
});

app.post('/registerAsset', (req, res) => {
    // Logic to handle registration of an Asset
    // Generate unique asset code and save Asset details
});

app.put('/transferAsset/:assetId', (req, res) => {
    // Logic to transfer ownership of an Asset to a new Tax Payer
});

app.post('/payIncomeTax', (req, res) => {
    // Logic to calculate and process income tax payments
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
// Taxpayer Schema
const mongoose = require('mongoose');

const taxpayerSchema = new mongoose.Schema({
  name: String,
  dateOfBirth: Date,
  occupation: String,
  gender: String,
  phone: String,
  annualIncome: Number,
  tin: { type: String, unique: true },
  assets: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Asset' }]
});

const Taxpayer = mongoose.model('Taxpayer', taxpayerSchema);

// Asset Schema
const assetSchema = new mongoose.Schema({
  assetName: String,
  estimatedCost: Number,
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'Taxpayer' },
  type: { type: String, enum: ['fixed', 'movable'] },
  assetNumber: { type: String, unique: true }
});

const Asset = mongoose.model('Asset', assetSchema);

module.exports = { Taxpayer, Asset };
const express = require('express');
const mongoose = require('mongoose');
const { Taxpayer, Asset } = require('./models');

const app = express();
 true })
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB', err));

app.use(express.static('public')); // Serve static files from 'public' directory

// Routes handling logic for different pages (transferPage, index, payTax, rAsset, rTpayer)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
document.addEventListener('DOMContentLoaded', function() {
    // Handler for registering a tax payer
    var registerPayerLink = document.querySelector('a[href="rTpayer.html"]');
    registerPayerLink.addEventListener('click', function(event) {
        // Handle click for registering a tax payer
        event.preventDefault();
        // Add your logic here for registering a tax payer
        // For example: window.location.href = 'rTpayer.html';
    });

    // Handler for registering an asset
    var registerAssetLink = document.querySelector('a[href="rAsset.html"]');
    registerAssetLink.addEventListener('click', function(event) {
        // Handle click for registering an asset
        event.preventDefault();
        // Add your logic here for registering an asset
        // For example: window.location.href = 'rAsset.html';
    });

    // Handler for paying income tax
    var payTaxLink = document.querySelector('a[href="payTax.html"]');
    payTaxLink.addEventListener('click', function(event) {
        // Handle click for paying income tax
        event.preventDefault();
        // Add your logic here for paying income tax
        // For example: window.location.href = 'payTax.html';
    });

    // Handler for asset transfer
    var assetTransferLink = document.querySelector('a[href="aTransfer.html"]');
    assetTransferLink.addEventListener('click', function(event) {
        // Handle click for asset transfer
        event.preventDefault();
        // Add your logic here for asset transfer
        // For example: window.location.href = 'aTransfer.html';
    });
});
