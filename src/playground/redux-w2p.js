import { createStore, combineReducers } from 'redux';

const filterReducerDefaultState = {
  text: '',
  sortBy: 'date',
  startDate: undefined,
  endDate: undefined,
};

const filterReducer = (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    default:
      break;
  }
};

const store = createStore(filterReducer);

const demoState = {
  events: [
    {
      Address: 'Av. Comendador Enzo Ferrari, 228 - Swift, Campinas - SP, Brazil',
      Data: '21/12/17',
      Descricao:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vulputate mi in turpis dapibus facilisis. Pellentesque massa erat, imperdiet non ornare quis, dignissim quis urna. Nam scelerisque lobortis dolor sed elementum. Sed condimentum imperdiet magna eleifend consequat. Maecenas semper, erat at blandit tempor, sem sapien iaculis mauris, vitae interdum est magna a purus. Donec quam nibh, vulputate id efficitur vel, ultrices vitae sem. Integer dictum neque quam, quis ultrices neque consequat non. Nulla at urna condimentum, pulvinar massa sed, lobortis erat. Aliquam interdum velit id quam bibendum venenatis. Nam eu quam nisi. Fusce sagittis nisl non facilisis volutpat. Donec venenatis pharetra urna, at gravida sapien sagittis iaculis. Fusce lobortis ornare dui ut luctus. Nunc cursus pharetra luctus.  Proin pellentesque in felis at suscipit. Morbi eget ullamcorper nulla, quis efficitur nisl. Mauris quam elit, tincidunt nec luctus in, dignissim et mi. Etiam convallis tellus quis felis porta, sit amet congue ante suscipit. Integer vitae euismod nibh, ac commodo nisi. Donec tristique nunc quam, nec pulvinar est ornare ut. Vivamus turpis purus, bibendum sed scelerisque id, dapibus vitae turpis. Morbi ac felis dui.  Maecenas eu felis sollicitudin, luctus enim sed, fringilla ante. Aenean vel egestas elit, in mattis erat. Suspendisse volutpat, sapien et ultrices sodales, nunc libero malesuada risus, sit amet elementum orci sapien ut augue. Phasellus iaculis facilisis arcu et rhoncus. Nulla aliquet mauris in mollis suscipit. Donec quis risus magna. Donec malesuada mauris eu fringilla mattis.  Cras malesuada imperdiet ipsum a congue. Vivamus bibendum efficitur commodo. Aenean at risus varius nibh faucibus euismod. Aliquam egestas pellentesque enim quis tincidunt. Maecenas posuere arcu arcu, vel egestas sem pulvinar ac. Proin fermentum eros quis cursus convallis. Mauris felis nibh, molestie eu lacinia ac, pretium sit amet tellus. Nunc viverra tellus in elit maximus scelerisque. Duis eget ligula eu enim consequat malesuada ut vel metus. Donec eu egestas leo. Pellentesque blandit sapien quis sapien placerat, ac egestas libero tempor. Suspendisse ut neque lacus. Praesent eget odio maximus, ultricies nisi quis, lacinia augue. Donec libero purus, tincidunt at tincidunt ac, hendrerit in lacus.  Cras sodales quam eget arcu consequat, id sollicitudin est vehicula. Sed vitae libero mauris. Integer nec leo sed quam aliquet pulvinar. Fusce eu nisl vel erat ullamcorper luctus. Aenean lobortis urna quis est tempor pulvinar. Integer blandit aliquam elit vel laoreet. Donec pharetra vestibulum porttitor. Duis ipsum ligula, porttitor vel mi sit amet, semper varius enim. Nam eget diam condimentum, dapibus nunc a, feugiat augue. Nam sit amet lorem efficitur, elementum justo at, interdum nunc.',
      Local: {
        latitude: -22.925993333333334,
        latitudeDelta: 0.015,
        longitude: -47.03723,
        longitudeDelta: 0.0121,
      },
      Titulo: 'Festa 1',
      image: 'X2e8wZADnwhU3EonNmH6ppqO9g73++1505237223764.jpeg',
      orgId: 'X2e8wZADnwhU3EonNmH6ppqO9g73',
    },
  ],
  filters: {
    text: '1',
    sortBy: 'data', // data
    startDate: undefined,
    endDate: undefined,
  },
};
