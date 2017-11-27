import { RestaurantModule } from './restaurant.module';

describe('RestaurantModule', () => {
  let restaurantModule: RestaurantModule;

  beforeEach(() => {
    restaurantModule = new RestaurantModule();
  });

  it('should create an instance', () => {
    expect(restaurantModule).toBeTruthy();
  });
});
