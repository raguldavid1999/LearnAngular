import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
<<<<<<< HEAD

=======
import 'hammerjs';
>>>>>>> 0ded381f71cef4c19c09a066d2811441c2a28e33
import { AppModule } from './app/app.module';


platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
