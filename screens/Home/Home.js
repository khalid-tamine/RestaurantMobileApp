import React from 'react';
import {View, ScrollView } from 'react-native';
import { HorizontalFoodCard, RedenderPopularSection, RenderDeliveryTo, RenderFeed, RenderFoodCategories, RenderMenuTypes, RenderRecomendedSection, RenderSearch, VerticalFoodCard } from '../../components';
import dummyData from '../../constants/dummyData';
import FilterModal from './FilterModal';




export default function Home () {

    const [selectedCategoryId, setSelectedCategoryId] = React.useState(1);
    const [selectedMenuType, setSelectedMenuType] = React.useState(1);
    const [popular, setPopular] = React.useState([]);
    const [recommends, setRecommends] = React.useState([]);
    const [feedList , setFeedList ] = React.useState([]);

    const [showFilterModal,setShowFilterModal] = React.useState(false)

    React.useEffect(() => {
        handleChangeCategory(selectedCategoryId)
        handleChangeMenu(selectedMenuType)
    }, [])

    // Initialize popular menu
    let selectedPopular = dummyData.menu.find(a => a.name == "Popular")

    // Initialize recommended menu
    let selectRecommend = dummyData.menu.find(a => a.name == "Recommended")
    // Initialize selected menu
    let selectedMenu = dummyData.menu.find(a => a.id == selectedMenuType)

    //handler
    function handleChangeCategory(categoryId) {
  
        // set the popular menu based on the categoryId
        setPopular(selectedPopular?.list.filter(a => a.categories.includes(categoryId)))

        // set the recommended menu based on the categoryId
        setRecommends(selectRecommend?.list.filter(a => a.categories.includes(categoryId)))
        
        //set the menu based on the categoryId
        setFeedList(selectedMenu?.list.filter(a => a.categories.includes(categoryId)))
        
    }

    function handleChangeMenu(menuTypeId){
        //set the menu based on the menuTypeId
        selectedMenu = dummyData.menu.find(a => a.id == menuTypeId)

        //set the feedList based on the menuTypeId
        setFeedList(selectedMenu?.list.filter(a => a.categories.includes(selectedCategoryId)))
    }    

   

    
    return (
        <View style = {{flex : 1}} >
            {/* Search */}
            <RenderSearch setShowFilterModal={setShowFilterModal} />

            {/* Filter */}
            {showFilterModal &&
                <FilterModal
                    isVisible = {showFilterModal}
                    onClose = {() => setShowFilterModal(false)}
                />
            }
            {/* Content */}
            <ScrollView>
                {/* Delivery To */}
                <RenderDeliveryTo address = {dummyData?.myProfile?.address} />
                {/* Food Categories */}
                <RenderFoodCategories
                    categories= {dummyData.categories}  
                    setSelectedCategoryId = {setSelectedCategoryId} selectedCategoryId = {selectedCategoryId}
                    handleChangeCategory = {handleChangeCategory} 
                />
                {/* Popular Food */}
                <RedenderPopularSection popular = {popular} />
                {/* Recommended Food */}
                <RenderRecomendedSection recommends = {recommends} />
                {/* Menu Types */}
                <RenderMenuTypes 
                    menu = {dummyData.menu} 
                    setSelectedMenuType = {setSelectedMenuType} selectedMenuType = {selectedMenuType}
                    handleChangeMenu = {handleChangeMenu} 
                />
                {/* Feed List */}
                <RenderFeed feedList = {feedList} />
                <View style= {{ height : 100 }} />
            </ScrollView>

        </View>
    )
}
