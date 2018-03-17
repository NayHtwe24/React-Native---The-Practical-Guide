import React, { Component } from  'react';
import { View, Text } from  'react-native';

import { connect } from 'react-redux';

import PlaceList from  '../../components/PlaceList/PlaceList';

class FindPlaceScreen extends Component {

	onItemSelectedHanlder = (placeKey) => {
		const place = this.props.places.find(place => {
									return place.key === placeKey;
								});

		this.props.navigator.push({
			screen: 'rn-course.PlaceDetailScreen',
			title: place.name,
			passProps: {
				selectedPlace: place
			}
		});
	}

	render() {
		return (
			<View>
				<PlaceList places={this.props.places}
					onItemSelected={this.onItemSelectedHanlder} />
			</View>
		);
	}
}

const mapStateToProps = state => {
	return {
		places: state.places.places
	}
}

const mapDispatchToProps = dispatch => {
	return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(FindPlaceScreen);