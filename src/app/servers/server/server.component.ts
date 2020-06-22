import { Component, OnInit } from '@angular/core';
import { ServicesService } from 'src/app/shared/services/services.service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  server: { id: number, name: string, status: string };
  constructor(private serversService: ServicesService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    debugger;
    const id = this.route.snapshot.params['id'];
    this.server = this.serversService.getServer(1);

    this.route.params.subscribe(
      (params: Params) => {
        this.server = this.serversService.getServer(+params['id']);
      }
    );



  }
  onEdit() {
    this.router.navigate(['edit'], {relativeTo: this.route})
  }
}
