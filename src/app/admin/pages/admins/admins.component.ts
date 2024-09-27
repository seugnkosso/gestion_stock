import { Component, OnInit } from '@angular/core';
import { RestResponse } from '../../../core/models/rest.response';
import { AdminList } from '../../../core/models/admin.model';
import { AdminImplService } from '../../../core/services/impl/admin-impl.service';
import { PaginationModel } from '../../../core/models/pagination.model';
import { PaginationComponent } from '../../../core/components/pagination/pagination.component';

@Component({
  selector: 'app-admins',
  standalone: true,
  imports: [PaginationComponent],
  templateUrl: './admins.component.html',
  styleUrl: './admins.component.css'
})
export class AdminsComponent implements OnInit {
  response? :RestResponse<AdminList[]>;
  dataPagination: PaginationModel = {
    pages: [],
    currentPage: 0,
  };

  constructor(private adminService: AdminImplService) {}

  ngOnInit(): void {
    this.refresh();
  }

  refresh(page : number = 0){
    this.adminService.findAll(page).subscribe(
      (data) =>
        (
          (this.response = data),
          (this.dataPagination.currentPage = data.currentPage!),
          (this.dataPagination.pages = data.pages!)
        )
      );
  }

  paginate(page: number) {
    this.refresh(page);
  }
}
