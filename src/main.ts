import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
// import { appConfig } from './app/app.config';
import { CatalogComponent } from './app/components/catalog-component/catalog-component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './app/services/in-memory-data.service';
import { provideHttpClient , withInterceptorsFromDi} from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
import { routes } from './app/app.routes';
import { provideRouter } from '@angular/router';


bootstrapApplication(App,   {
  
  providers: [

    provideHttpClient(withInterceptorsFromDi()),
    provideRouter(routes),
     importProvidersFrom(
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { 
        dataEncapsulation: false,
        delay: 0,
        passThruUnknownUrl: true, 
        apiBase: 'api/' 
      })
    )
  ]
  
});


 



// appConfig)
//   .catch((err) => console.error(err)