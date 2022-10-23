-- Hypothetically, this would create all the local tables/database.

-- Create Product table
CREATE TABLE Product
(
    ProductId INT IDENTITY PRIMARY KEY,
    ProductName VARCHAR(20) NOT NULL,
    Manufacturer VARCHAR(20),
    Style VARCHAR(20) NOT NULL,
    PurchasePrice INT NOT NULL,
    SalePrice INT NOT NULL,
    Quantity INT NOT NULL,
    CommissionPercentage INT NOT NULL,
)

-- Create Salesperson table
CREATE TABLE Salesperson
(
    SalespersonId INT IDENTITY PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    HomeAddress VARCHAR(40),
    PhoneNumber VARCHAR(20),
    StartDate DATE,
    EndDate DATE,
    Manager VARCHAR(40)
)

-- Create Customer table
CREATE TABLE Customer
(
    CustomerId INT IDENTITY PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    HomeAddress VARCHAR(40),
    PhoneNumber VARCHAR(20),
    StartDate DATE,
)

-- Create Sale table
CREATE TABLE Sale
(
    SaleId INT IDENTITY PRIMARY KEY,
    Product INT REFERENCES Product (ProductId),,
    Salesperson INT REFERENCES Salesperson (SalespersonId)
    Customer INT REFERENCES Customer (CustomerId),
    PurchaseDate DATE NOT NULL,
    Price INT NOT NULL,
    Commission INT NOT NULL,
)

-- Create Discount table
CREATE TABLE Discount
(
    DiscountId INT IDENTITY PRIMARY KEY,
    Product INT REFERENCES Product (ProductId),
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    PercentageSaved INT NOT NULL,
)