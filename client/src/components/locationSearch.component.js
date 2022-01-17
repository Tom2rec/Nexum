import React, {Component} from "react";
import LocationService from "../services/location.service";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";


const required = value => {
    if (!value) {
        return (
            <div className="alert alert-danger" role="alert">
                This field is required!
            </div>
        );
    }
};

export default class LocationSearchComponent extends Component {
    constructor(props) {
        super(props);
        this.handleSearch = this.handleSearch.bind(this);
        this.onChangeAddress = this.onChangeAddress.bind(this);
        this.onChangeNumberOfPeople = this.onChangeNumberOfPeople.bind(this);
        this.onChangeCategory = this.onChangeCategory.bind(this);

        this.state = {
            address: "",
            numberOfPeople: "",
            category: "",
            loading: false,
            message: "",
        };
    }

    onChangeAddress(e) {
        this.setState({
            address: e.target.value
        });
    }

    onChangeNumberOfPeople(e) {
        this.setState({
            numberOfPeople: e.target.value
        });
    }

    onChangeCategory(e) {
        this.setState({
            category: e.target.value
        });
    }



    handleSearch(e) {
        e.preventDefault();

        this.setState({
            message: "",
            loading: true
        });

        this.form.validateAll();

        if (this.checkBtn.context._errors.length === 0) {
            LocationService.getSpecificLocations(this.state.address, this.state.numberOfPeople, this.state.category).then(
                () => {
                    this.props.history.push("/locations");
                    window.location.reload();
                },
                error => {
                    const resMessage =
                        (error.response &&
                            error.response.data &&
                            error.response.data.message) ||
                        error.message ||
                        error.toString();

                    this.setState({
                        loading: false,
                        message: resMessage
                    });
                }
            );
        } else {
            this.setState({
                loading: false
            });
        }
    }


    render() {
        return (
            <div>
                <Form
                    onSubmit={this.handleSearch}
                    ref={c => {
                        this.form = c;
                    }}
                >
                    <div className="form-group">
                        <label htmlFor="address">Address</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="address"
                            value={this.state.address}
                            onChange={this.onChangeAddress}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="numberOfPeople">Number of People</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="numberOfPeople"
                            value={this.state.numberOfPeople}
                            onChange={this.onChangeNumberOfPeople}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="category">Category</label>
                        <Input
                            type="text"
                            className="form-control"
                            name="category"
                            value={this.state.category}
                            onChange={this.onChangeCategory}
                            validations={[required]}
                        />
                    </div>

                    <div className="form-group">
                        <button
                            className="btn btn-primary btn-block"
                            disabled={this.state.loading}
                        >
                            {this.state.loading && (
                                <span className="spinner-border spinner-border-sm"></span>
                            )}
                            <span>Search</span>
                        </button>
                    </div>

                    {this.state.message && (
                        <div className="form-group">
                            <div className="alert alert-danger" role="alert">
                                {this.state.message}
                            </div>
                        </div>
                    )}
                    <CheckButton
                        style={{display: "none"}}
                        ref={c => {
                            this.checkBtn = c;
                        }}
                    />
                </Form>
            </div>
        );
    }

}