import React from 'react';

const Imagen = (props) => {

	const {largeImageURL, likes, previewURL, tags, views, comments, downloads} = props.imagen;
	console.log(props.imagen);
	return (
		<div className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
			<div className="card">
				<img src={previewURL} alt={tags} className="card-img-top" />
				<div className="card-body">
					<p className="card-text">Me gusta: {likes}</p>
					<p className="card-text">Vistas: {views}</p>
					<p className="card-text">Comentarios: {comments}</p>
					<p className="card-text">Descargas: {downloads}</p>

					<a href={largeImageURL} rel="opener" className="btn btn-primary btn-block">Ver Imagen</a>

				</div>
			</div>
		</div>
		
	)
}	

export default Imagen;