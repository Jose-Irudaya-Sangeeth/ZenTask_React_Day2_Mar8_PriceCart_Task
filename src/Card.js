

export function Card({data}) {
  return (
    <div class="col-lg-4">
      <div class="card mb-5 mb-lg-0">
        <div class="card-body">
          <h5 class="card-title text-muted text-uppercase text-center">{data.title}</h5>
          <h6 class="card-price text-center">${data.price}<span class="period">/month</span></h6>
          <hr />
          <ul class="fa-ul">
            <li class={data.userEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.userEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.title === "FREE" ? <>{data.user}</> : <b>{data.user}</b>}</li>
            <li class={data.storageEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.storageEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.storage}</li>
            <li class={data.publicProjectsEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.publicProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.publicProjects}</li>
            <li class={data.communityAccessEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.communityAccessEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.communityAccess}</li>
            <li class={data.privateProjectsEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.privateProjectsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.privateProjects}</li>
            <li class={data.phoneSupportEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.phoneSupportEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.phoneSupport}</li>
            <li class={data.subdomainEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.subdomainEnabler ? "fas fa-check" : "fas fa-times"}></i></span><b>{data.subdomainPrefix}</b> {data.subdomain}</li>
            <li class={data.reportsEnabler ? "" : "text-muted"}><span class="fa-li"><i class={data.reportsEnabler ? "fas fa-check" : "fas fa-times"}></i></span>{data.reports}</li>
          </ul>
          <div class="d-grid">
            <a href="#" class="btn btn-primary text-uppercase">Button</a>
          </div>
        </div>
      </div>
    </div>
  );
}
