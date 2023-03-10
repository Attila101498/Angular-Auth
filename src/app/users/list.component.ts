import { Component, OnInit } from '@angular/core';
import { AccountService } from '@app/_services';
import { first } from 'rxjs/operators';

@Component({
  templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
  users: any[];

  constructor(private accountService: AccountService) { }

  ngOnInit(): void {
    this.accountService.getAll()
      .pipe(first())
      .subscribe(users => this.users = users);
  }

  deleteUser(id: string) {
    const user = this.users.find(x => x.id === id);
    confirm("Are you sure, you want to delete this user?")
      ? user.isDeleting = true && this.accountService.delete(id)
        .pipe(first())
        .subscribe(() => this.users = this.users.filter(x => x.id !== id))
      : "";
  }
}