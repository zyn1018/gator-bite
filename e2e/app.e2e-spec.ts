import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('gator-bite App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  /**
   * Test find nearby restaurant function
   */
  it('Test Find food and gator-bite button', () => {
    browser.get('/');
    const findButton = element(by.id('findButton'));
    findButton.click();
    const restaurantCount = element.all(by.id('restaurantList')).count();
    expect(restaurantCount).toEqual(8);
    const gatorbiteButton = element(by.id('gatorbiteButton'));
    gatorbiteButton.click();
    expect(element(by.id('findButton')).getText()).toEqual('Find Food');
  });

  /**
   * Test login
   */
  it('Login Page test', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('restest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    element(by.id('restaurantOption')).click();
    const button = element(by.id('loginButton'));
    button.click();
    expect(element.all(by.tagName('tr')).count());
  });

  /**
   * Test dish management (create)
   */
  it('Test dishes manage page create', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('restest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    const loginButton = element(by.id('loginButton'));
    element(by.id('restaurantOption')).click();
    loginButton.click();
    const createButton = element(by.id('createButton'));
    createButton.click();
    const dishName = element(by.id('dishName')).sendKeys('test');
    const dishPrice = element(by.id('dishPrice')).sendKeys(2.29);
    element(by.id('saveButton')).click();
    expect(element.all(by.tagName('tr')).count()).toBe(13);

  });

  /**
   * Test dish management (delete)
   */
  it('Test dishes manage page delete', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('restest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    const loginButton = element(by.id('loginButton'));
    element(by.id('restaurantOption')).click();
    loginButton.click();
    const deleteButton = element.all(by.id('dishes')).get(11)
      .element(by.id('deleteButton'));
    deleteButton.click();
    browser.switchTo().alert().accept();
    expect(element.all(by.tagName('tr')).count()).toBe(12);
  });

  /**
   * Test dish management (update)
   */
  it('Test dishes manage page update', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('restest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    const loginButton = element(by.id('loginButton'));
    element(by.id('restaurantOption')).click();
    loginButton.click();
    const updateButton = element.all(by.id('dishes')).get(9)
      .element(by.id('updateButton'));
    updateButton.click();
    element(by.id('dishName')).clear();
    element(by.id('dishName')).sendKeys('26 Boneless Wings');
    const saveButton = element(by.id('saveButton'));
    saveButton.click();
    const dishNameNew = element.all(by.id('dishes')).get(9)
      .element(by.id('tdDishName')).getText();
    expect(dishNameNew).toBe('26 Boneless Wings');
  });

  /**
   * Test restaurant information page
   */
  it('Test Restaurant page', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('restest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    element(by.id('restaurantOption')).click();
    const loginButton = element(by.id('loginButton'));
    loginButton.click();
    const userButton = element(by.id('userButton'));
    userButton.click();
    expect(element.all(by.id('menuListRes')).count()).toBe(3);
  });

  /**
   * Test user information page
   */
  // it('Test User page', () => {
  //   browser.get('/login');
  //   const userEmail = element(by.id('loginEmail')).sendKeys('usertest@gmail.com');
  //   const userPassword = element(by.id('loginPassword')).sendKeys('123456');
  //   element(by.id('customerOption')).click();
  //   const loginButton = element(by.id('loginButton'));
  //   loginButton.click();
  //   const userButton = element(by.id('userButton'));
  //   userButton.click();
  //   expect(element.all(by.id('menuList')).count()).toBe(4);
  // });

  /**
   * Test function of getting current location
   */
  it('get current location', () => {
    let address = '';
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('usertest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    element(by.id('customerOption')).click();
    const loginButton = element(by.id('loginButton'));
    loginButton.click();
    element(by.id('locationInfo')).click();
    setTimeout(() => {
      expect(element(by.id('locationText')).getText()).toBeDefined();
    }, 6000);
  });

  /**
   * Test go to the menu page of a restaurant
   */
  it('User go to one restaurant menu', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('usertest@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('123456');
    element(by.id('customerOption')).click();
    const loginButton = element(by.id('loginButton'));
    loginButton.click();
    const findButton = element(by.id('findButton'));
    findButton.click();
    element.all(by.id('restaurantList')).get(1).element(by.id('restaurantImg')).click();
    expect(element.all(by.id('dishesOption')).count()).toBeGreaterThan(0);
  });

  /**
   * Test user submitting an order
   */
  // it('Test submit order', () => {
  //   browser.get('/login');
  //   const userEmail = element(by.id('loginEmail')).sendKeys('usertest@gmail.com');
  //   const userPassword = element(by.id('loginPassword')).sendKeys('123456');
  //   element(by.id('customerOption')).click();
  //   const loginButton = element(by.id('loginButton'));
  //   loginButton.click();
  //   const findButton = element(by.id('findButton'));
  //   findButton.click();
  //   element.all(by.id('restaurantList')).get(3).element(by.id('restaurantImg')).click();
  // });
});
