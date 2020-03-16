import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-goal-form',
  templateUrl: './create-goal-form.component.html',
  styleUrls: ['./create-goal-form.component.scss']
})
export class CreateGoalFormComponent implements OnInit {
  createGoalFormData = this.fb.group({
    title: ['', [Validators.required]],
    url: ['', [Validators.required]],
    prerequisiteUrl: ['', []],
  })

  constructor(
    public dialogRef: MatDialogRef<CreateGoalFormComponent>,
    private fb: FormBuilder,
  ) { }

  ngOnInit() {
  }
  
  onNoClick(): void {
    this.dialogRef.close();
  }

  submitCreateGoalForm(){
    if(this.createGoalFormData.valid){
      this.dialogRef.close(this.createGoalFormData.value);
    } else {
      
    }

  }

}
