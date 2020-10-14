import React from 'react'

export default function Modal() {
    return (
        <div class="container">
            <div class="modal fade" id="myModal" role="dialog">
                <div class="modal-content">
                    <div class="modal-header">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Submit this Form</h4>
                    </div>
                    <div class="modal-body">
                    <p>Name:</p>
                    </div>
                    <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div> 
  
    )
}
