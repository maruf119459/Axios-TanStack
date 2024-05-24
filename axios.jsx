import Swal from "sweetalert2";
import axios from "axios";
const AddCoffe = () => {
    const handleAddCoffe = e => {
        e.preventDefault();
        const name = e.target.name.value;
        const quantity = e.target.quantity.value;
        const supplier = e.target.supplier.value;
        const teste = e.target.teste.value;
        const category = e.target.category.value;
        const details = e.target.details.value;
        const photo = e.target.photo.value;
        const price = e.target.price.value;

        const newCoffee = { name, quantity, supplier, teste, category, details, photo, price }
        console.log(newCoffee)

        axios.post('http://localhost:5000/coffee', newCoffee)
            .then(res => {
                if (res.data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    e.target.reset();
                }
            })
            .catch(error => {
                console.log(error)
            });

        /*
        // collect from website doc
        axios.post('/user', {
            firstName: 'Fred',
            lastName: 'Flintstone'
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });

        * /

        /*
        // fetch operation
        fetch('http://localhost:5000/coffee', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newCoffee)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Coffee Added Successfully',
                        icon: 'success',
                        confirmButtonText: 'OK'
                    })
                    e.target.reset();
                }
            })
        */

    }
    return (
        <div>
            <div className="h-auto bg-base-200">
                <div className="pt-10">
                    <h1>Add New Coffee</h1>
                    <p className="text-center px-[150px] py-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed non voluptas vero, nihil dolore fuga libero, dolor debitis hic labore tempora provident modi! Neque cum unde praesentium obcaecati dolorem deleniti optio quod, nesciunt eum rerum, asperiores, id sunt. Ea dignissimos exercitationem, odit iure nisi nemo quisquam pariatur error voluptatibus deleniti.</p>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse pb-10">
                    <div className=" w-[800px]  shadow-2xl bg-base-100 rounded-lg">
                        <form onSubmit={handleAddCoffe} className="w-[600px] mx-[90px] py-[20px]">
                            <div className=" flex gap-y-2 gap-x-5">
                                <div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" placeholder="coffee name" name="name" className="input input-bordered w-[300px]" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Available Quantity</span>
                                        </label>
                                        <input type="text" placeholder="available quantity" name="quantity" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Supplier</span>
                                        </label>
                                        <input type="text" placeholder="supplier" name="supplier" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Price</span>
                                        </label>
                                        <input type="text" placeholder="price" name="price" className="input input-bordered" required />

                                    </div>
                                </div>
                                <div className="w-full">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Teste</span>
                                        </label>
                                        <input type="text" placeholder="teste" name="teste" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Category</span>
                                        </label>
                                        <input type="text" placeholder="category" name="category" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Details</span>
                                        </label>
                                        <input type="text" placeholder="details" name="details" className="input input-bordered" required />

                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Photo Url</span>
                                        </label>
                                        <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />

                                    </div>
                                </div>
                            </div>

                            <div className="form-control  py-[20px]">
                                <button className="btn btn-primary">Add Coffe</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffe;
