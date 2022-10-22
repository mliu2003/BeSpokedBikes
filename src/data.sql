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
    HomeAddress VARCHAR(40) NOT NULL,
    PhoneNumber VARCHAR(20) NOT NULL,
    StartDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    Manager VARCHAR(20) NOT NULL
)

-- Create Customer table
CREATE TABLE Customer
(
    CustomerId INT IDENTITY PRIMARY KEY,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
    HomeAddress VARCHAR(40) NOT NULL,
    PhoneNumber VARCHAR(20) NOT NULL,
    StartDate DATE NOT NULL,
)

-- Create Sale table
CREATE TABLE Sale
(
    SaleId INT IDENTITY PRIMARY KEY,
    Product INT REFERENCES Product (ProductId),
    Customer INT REFERENCES Customer (CustomerId),
    PurchaseDate DATE NOT NULL,
    Salesperson INT REFERENCES Salesperson (SalespersonId)
)

-- Create Discount table
CREATE TABLE Discount
(
    DiscountId INT IDENTITY PRIMARY KEY,
    Product INT REFERENCES Product (ProductId),
    BeginDate DATE NOT NULL,
    EndDate DATE NOT NULL,
    DiscountPercentage INT NOT NULL,
)