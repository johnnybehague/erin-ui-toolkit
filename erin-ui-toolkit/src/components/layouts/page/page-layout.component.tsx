import PageLayoutProperties from "./page-layout.properties";

// children[0] => Sidebar
// children[1] => Topbar
// children[2] => Content
// children[3] +> 
const Page = (props: PageLayoutProperties) => {
    return (
        <>
            <div id="wrapper">
                {props.children[0]}
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        {props.children[1]}
                        <div className="container-fluid">
                            {props.children[2]}
                            {props.children[3]}
                        </div>
                    </div>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            <div className="modal fade" id="logoutModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Page;