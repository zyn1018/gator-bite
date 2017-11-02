import {AppPage} from './app.po';
import {browser, by, element} from 'protractor';

describe('gator-bite App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });


  it('Test Find food and gator-bite button', () => {
    browser.get('/');
    const findButton = element(by.id('findButton'));
    findButton.click();

    const restaurantCount = element.all(by.id('restaurantList')).count();
    expect(restaurantCount).toEqual(4);

    const gatorbiteButton = element(by.id('gatorbiteButton'));
    gatorbiteButton.click();

    expect(element(by.id('findButton')).getText()).toEqual('Find Food');

  });

  it('Login Page test', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('wingzone@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('admin');
    const button = element(by.id('loginButton'));

    button.click();

    expect(element.all(by.tagName('tr')).count()).toBe(8);
  });

  it('Test dishes manage page create', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('wingzone@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('admin');
    const loginButton = element(by.id('loginButton'));
    loginButton.click();

    const createButton = element(by.id('createButton'));
    createButton.click()

    const dishName = element(by.id('dishName')).sendKeys('Sweet Coleslaw');
    const dishPrice = element(by.id('dishPrice')).sendKeys(2.29);
    element(by.id('saveButton')).click();
    expect(element.all(by.tagName('tr')).count()).toBe(9);

  });

  it('Test dishes manage page delete', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('wingzone@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('admin');
    const loginButton = element(by.id('loginButton'));
    loginButton.click();

    const deleteButton = element.all(by.id('dishes')).get(2)
      .element(by.id('deleteButton'));
    deleteButton.click();

    browser.switchTo().alert().accept();

    expect(element.all(by.tagName('tr')).count()).toBe(7);
  });

  it('Test dishes manage page update', () => {
    browser.get('/login');
    const userEmail = element(by.id('loginEmail')).sendKeys('wingzone@gmail.com');
    const userPassword = element(by.id('loginPassword')).sendKeys('admin');
    const loginButton = element(by.id('loginButton'));
    loginButton.click();

    const updateButton = element.all(by.id('dishes')).get(2)
      .element(by.id('updateButton'));
    updateButton.click();

    element(by.id('dishName')).clear();
    element(by.id('dishName')).sendKeys('26 Boneless Wings');
    const saveButton = element(by.id('saveButton'));
    saveButton.click();

    const dishNameNew = element.all(by.id('dishes')).get(2)
      .element(by.id('tdDishName')).getText();
    expect(dishNameNew).toBe('26 Boneless Wings');
  });
});
