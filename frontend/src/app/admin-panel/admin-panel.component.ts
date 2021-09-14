import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { AdminService } from './admin.service';

@Component({
  selector: 'app-admin-panel',
  templateUrl: './admin-panel.component.html',
  styleUrls: ['./admin-panel.component.css']
})
export class AdminPanelComponent implements OnInit {
  
  formCategory: FormGroup;
  formUser: FormGroup;
  formProduct: FormGroup;
  productsData !: any;
  categoriesData !: any;
  usersData !: any;

  roles: string[] = ['ADMIN', 'USER'];
  selectedRole = '';

  constructor(private formBuilder: FormBuilder, private adminService: AdminService) {

    this.formCategory = formBuilder.group({
      category : ['', Validators.required]
    })
    
    this.formUser = formBuilder.group({
      email : ['', Validators.email],
      firstName : ['', Validators.required],
      lastName : ['', Validators.required],
      password: ['', Validators.required],
      role: ['', Validators.required]
    })

    this.formProduct = formBuilder.group({
      name: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required]
    })

   }

  ngOnInit(): void {
    this.getAllProducts();
    this.getAllCategories();
    this.getAllUsers();
  }

  onSubmitCategory() {
    if(this.formCategory.valid) {
      const category = this.formCategory.get('category')?.value;
      this.adminService.addCategory(category).subscribe(res => console.log(res))
    }
  }

  onSubmitUser() {
    if(this.formUser.valid) {
      const email = this.formUser.get('email')?.value;
      const firstName = this.formUser.get('firstName')?.value;
      const lastName = this.formUser.get('lastName')?.value;
      const password = this.formUser.get('password')?.value;
      const role = this.formUser.get('role')?.value;
      
      const userJson = {
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password,
        role: role
      }
      

      this.adminService.addUser(userJson).subscribe(res => console.log(res))
    }

  }

  onSubmitProduct() {
    if(this.formProduct.valid) {
      const name = this.formProduct.get('name')?.value;
      const price = this.formProduct.get('price')?.value;
      const description = this.formProduct.get('description')?.value;
      const image = this.formProduct.get('image')?.value;

      const productJson = {
        name: name,
        price: Number(price),
        description: description,
        image: image
      }
      
      this.adminService.addProduct(productJson).subscribe(res => console.log(res))
    }

  }

  getAllProducts(){
    this.adminService.getProducts()
    .subscribe(res=>{
      this.productsData = res;
    })
  }

  getAllCategories(){
    this.adminService.getCategories()
    .subscribe(res=>{
      this.categoriesData = res;
    })
  }

  getAllUsers(){
    this.adminService.getUsers()
    .subscribe(res=>{
      this.usersData = res;
    })
  }

}
