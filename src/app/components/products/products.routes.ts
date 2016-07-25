import {RouterConfig} from '@angular/router';

import {ProductCenterComponent} from './product-center.component';
import {ProductsComponent} from './products.component';
import {ViewProductComponent} from './view-product.component';
import {CreateProductComponent} from './create-product.component';
import {UpdateProductComponent} from './update-product.component';

export const ProductsRoutes: RouterConfig = [
    {
        path: 'products', component: ProductCenterComponent,
        children: [
            { path: '', component: ProductsComponent},
            { path: 'view/:id', component: ViewProductComponent},
            { path: 'update/:id', component: UpdateProductComponent},
            { path: 'create', component: CreateProductComponent}
        ]
    }
]