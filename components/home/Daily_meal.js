import Link from 'next/link';

const Daily_meal = (props) => {
  let url = '/details/';

  return(
    <div className="container mb-3" id="meal-card">
        <div className="row justify-content-start">
            <div className="col-12 text-center mb-5">
                <h2>Our meal choice of the day</h2>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                <div className="meal-card card mx-auto">
                    <img className="meal-img card-img-top d-block mx-auto m-2" src={props.data.breakfast[0].img_src_1 } alt="breakfast"/>
                    <div className="card-body">
                        {/* <h5 className="card-title">{props.data.breakfast[0].title}</h5> */}
                        <h5 className="card-title">{props.data.breakfast[0].title}</h5>
                        <p className="card-text">Breakfast of the choice.</p>
                        <Link href="/details/[id]" as={`${url}${props.data.breakfast[0].id}`}>
                          <a className="btn btn-primary">Learn to cook it</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                <div className="meal-card card mx-auto">
                    <img className="meal-img card-img-top d-block mx-auto m-2" src={props.data.lunch[0].img_src_1} alt="lunch"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.lunch[0].title}</h5>
                        <p className="card-text">Lunch of the choice.</p>
                        <Link href="/details/[id]" as={`${url}${props.data.lunch[0].id}`}>
                          <a className="btn btn-primary">Learn to cook it</a>
                        </Link>
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4 col-xl-4 mb-3">
                <div className="meal-card card mx-auto">
                    <img className="meal-img card-img-top d-block mx-auto m-2" src={props.data.dinner[0].img_src_1} alt="dinner"/>
                    <div className="card-body">
                        <h5 className="card-title">{props.data.dinner[0].title}</h5>
                        <p className="card-text">Dinner of the choice</p>
                        <Link href="/details/[id]" as={`${url}${props.data.dinner[0].id}`}>
                          <a className="btn btn-primary">Learn to cook it</a>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>


)}

export default Daily_meal;
