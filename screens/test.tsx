/*import React from 'react';
import { StyleSheet, Text, View, FlatList, SafeAreaView } from 'react-native';

const data = [
  {id: '1', text: 'One'},
  {id: '2', text: 'Two'},
  {id: '3', text: 'Three'},
  {id: '4', text: 'Four'},
  {id: '5', text: 'Five'},
  {id: '6', text: 'Six'},
  {id: '7', text: 'Seven'},
  {id: '8', text: 'Eight'},
  {id: '9', text: 'Nine'},
  {id: '10', text: 'Ten'},
  {id: '11', text: 'Eleven'},
  {id: '12', text: 'Twelve'},
  {id: '13', text: 'Thirteen'},
  {id: '14', text: 'Fourteen'},
  {id: '15', text: 'Fifteen'},
  {id: '16', text: 'Sixteen'},
  {id: '17', text: 'Seventeen'},
  {id: '18', text: 'Eighteen'},
]

const Item = ({item}:any) => {
  return (
    <View style={[styles.item, styles.shadow]}>
      <Text>{item.text}</Text>
    </View>
  );
}

export default function List(){
  return (
    <FlatList
      contentContainerStyle={styles.list}
      data={data}
      renderItem={Item}
      keyExtractor={item => item.id}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  list: {
    paddingVertical: 30,
    justifyContent: 'flex-start'
  },
  item: {
    backgroundColor: '#fff',
    padding: 20,
    marginHorizontal: 10,
    marginBottom: 3.5,
    flexDirection: 'row'
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10
    },
    shadowOpacity: 0.47,
    shadowRadius: 9,
  }
});*//*

import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  TextInput,
  ScrollView,
  Button,
  Text,
} from 'react-native';
import Constants from 'expo-constants';

export default class Test extends Component {
  currentScrollY = 0;
  constructor(props:any) {
    super(props);
    this.state = { text: '' };
  }

  handleScroll = (event:any) => {console.log("jjjj")
    const { layoutMeasurement, contentOffset, contentSize } = event.nativeEvent;
    this.currentScrollY = contentOffset.y;
    // console.log('contentOffset.y '+contentOffset.y ', contentSize.height '+ ontentSize.height);
    if (layoutMeasurement.height + contentOffset.y >= contentSize.height - 30) {
      console.log('auto scroll ended');
      clearInterval(this.goToScroll());
    }
  };

  scroll:any
  goToScroll ():number {console.log("dd")
    //le.debug(this.scroll.contentOffset.y);
    if (this.scroll) {
      const newY = this.currentScrollY + 5;
      return this.scroll.scrollTo({ x: 0, y: newY, animated: true });
    }
    return 0
  };

  async componentWillMount() {
    /*let response = await fetch(
      'https://docs.expo.io/versions/latest/sdk/constants/'
    );
    let textResponse = await response.text();*//*
    this.setState({ text: "For Wikipedia’s internal directory, see Wikipedia:Directories and indexes.ShortcutsWP:STARTWP:EXPLOREContents1	Main subject classifications2	Curated article collections3	Third-party classification systems4	Reference collections5	Special format collections6	Collections of articles7	Collections of articles by quality or popularityWikipedia is a compendium of the world's knowledge. If you know what you are looking for, type it into Wikipedia's search box. If, however, you need a bird's eye view of what Wikipedia has to offer, see its main contents pages below, which in turn list more specific pages.Main subject classificationsWikipedia's main navigation subsystems (overviews, outlines, lists, portals, glossaries, categories, and indices) are each divided into the following subject classifications:Reference works – compendiums of information, usually of a specific type, compiled in a book for ease of reference. That is, the information is intended to be quickly found when needed.Culture – encompasses the social behavior and norms found in human societies, as well as the knowledge, beliefs, arts, laws, customs, capabilities and habits of the individuals in these groups.Geography – field of science devoted to the study of the lands, features, inhabitants, and phenomena of the Earth and planets.Health – state of physical, mental and social well-being.History – the past as it is described in written documents, and the study thereof.Human activities – the various activities done by people. For instance it includes leisure, entertainment, industry, recreation, war, and exercise.Mathematics – the study of topics such as quantity (numbers), structure, space, and change. It evolved through the use of abstraction and logical reasoning, from counting, calculation, measurement, and the systematic study of the shapes and motions of physical objects.Natural science – branch of science concerned with the description, prediction, and understanding of natural phenomena, based on empirical evidence from observation and experimentation.People – plurality of persons considered as a whole, as is the case with an ethnic group or nation.Philosophy – study of general and fundamental questions about existence, knowledge, values, reason, mind, and language.Religions – social-cultural systems of designated behaviors and practices, morals, worldviews, texts, sanctified places, prophecies, ethics, or organizations, that relates humanity to supernatural, transcendental, or spiritual elements.Society – group of individuals involved in persistent social interaction, or a large social group sharing the same geographical or social territory, typically subject to the same political authority and dominant cultural expectations. Societies are characterized by patterns of relationships (social relations) between individuals who share a distinctive culture and institutions; a given society may be described as the sum total of such relationships among its constituent of members.Technology – the sum of techniques, skills, methods, and processes used in the production of goods or services or in the accomplishment of objectives, such as scientific investigation.Curated article collectionsOverview articlesOverview articles summarize in prose a broad topic like biology, and also have illustrations and links to subtopics like cell biology, biographies like Carl Linnaeus, and other related articles like Human Genome Project.Wikipedia:Contents/Overviews lists overview articles from covered fields in a single page.Outline pagesOutline pages have trees of topics in an outline format, which in turn are linked to further outlines and articles providing more detail. Outlines show how important subtopics relate to each other based on how they are arranged in the tree, and they are useful as a more condensed, non-prose alternative to overview articles.Wikipedia:Contents/Outlines is a comprehensive list of =pages, organized by subject. It is itself an outline, that links (almost) exclusively to other outlines.Outline of academic disciplines covers subjects studied in college or university, and provides links to prose overview articles and their corresponding outlines.Outline of knowledge is the top-level outline, its subject being the broadest one of all. It is the ancestor of all other outlines, and they branch out from it, in successive levels.Vital articlesMain page: Wikipedia:Vital articlesVital articles are lists of subjects for which Wikipedia should have corresponding high-quality articles. They serve as centralized watchlists to track the status of Wikipedia's most important articles.Vital articles level 1 – 10 most important articlesVital articles level 2 – 100 most important articlesVital articles level 3 – 1,000 most important articlesVital articles level 4 – 10,000 most important articlesVital articles level 5 – 50,000 most important articlesThird-party classification systemsVarious third-party classification systems have been mapped to Wikipedia articles, which can be accessed from these pages:Library of Congress ClassificationList of Dewey Decimal classesFigurative system of human knowledgeOutline of Roget's ThesaurusPropædiaTree of knowledge systemUniversal Decimal ClassificationReference collectionsWikipedia has several types of pages which provide content in a non-prose form, for reference purposes.List pagesList pages enumerate items of a particular type, such as the List of sovereign states or List of South Africans. Wikipedia has  when there are too many items to fit on a single page, when the items can be sorted in different ways, or as a way of navigating lists on a topic (for example Lists of countries and territories or Lists of people). There are several ways to find lists:Wikipedia:Contents/Lists – A limited single-page collection of lists and lists of listsList of lists of lists – A broad single-page collection of lists of listsCategory:Lists – Browse lists comprehensively via the multi-page Wikipedia category systemTimelinesTimelines list events chronologically, sometimes including links to articles with more detail. There are several ways to find timelines:List of timelines has a long single-page collectionCategory:Wikipedia timelines has a comprehensive multi-page collection via the Wikipedia category systemOf particular interest may be:List of centuriesList of decadesList of historical anniversaries – e.g. events on January 1 of any yearCategory:Graphical timelines – graphical timelines in the category and subcategories, arranged alphabeticallyGlossariesGlossaries are lists of terms with definitions. Wikipedia includes hundreds of alphabetical glossaries; they can be found two ways:Wikipedia:Contents/Glossaries – A single-page list of glossariesCategory:Wikipedia glossaries – Browse glossaries comprehensively via the Wikipedia category systemBibliographiesBibliographies list sources on a given topic, for verification or further reading outside Wikipedia:Wikipedia:List of bibliographies is a list of bibliographiesCategory:Wikipedia bibliographies has a complete multi-page listing of bibliographies on WikipediaCategory:DiscographiesDiscographies catalog the sound recordings of individual artists or groups.Category:Discographies has a complete multi-page listingSpecial format collectionsPortalsPortals contain featured articles and images, news, categories, excerpts of key articles, links to related portals, and to-do lists for editors. There are two ways to find portals:Wikipedia:Contents/Portals – A single-page list of portalsCategory:Portals – Browse portals comprehensively via the Wikipedia category system.Spoken articlesGrowing collections of Wikipedia articles are starting to become available as spoken word recordings as well.Category:Spoken articles – an organized list of all spoken articlesWikipedia:Spoken articles – some general information about the spoken article technologyCollections of articlesCategory systemWikipedia's collection of category pages is a classified index system. It is automatically generated from category tags at the bottoms of articles and most other pages. Nearly all of the articles available so far on the website can be found through these subject indexes.If you are simply looking to browse articles by topic, there are three top-level pages to choose from:Category:Main topic classifications – probably what you are looking for: Arts, History, Technology, etc."
   });

     setInterval(this.goToScroll(), 20);
  }

  componentWillUnmount() {
    clearInterval(this.goToScroll());
  }

  ooo(){
   console.log("this.scroll")

    this.scroll.scrollToEnd({ animated: true, duration: 500 });

    console.log(this.scroll)
  }

  render() {
    return (
      <><Button
        title="Press me"
        onPress={() => this.ooo()}
      />
        <ScrollView

          onScrollToTop={() => console.log("hhhh")}
          onScroll={this.handleScroll}
          ref={c => {
            this.scroll = c; 
          }}>
            
          <Text>{this.state.text}</Text>
        </ScrollView>
      </>
    );
  }
}*/
import React, { Component } from 'react';
import { Text, View, FlatList, Dimensions, Button, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window');

const style = {
  justifyContent: 'center',
  alignItems: 'center',
  width: width,
  height: 50,
  flex: 1,
  borderWidth: 1,
};

const COLORS = ['deepskyblue','fuchsia', 'lightblue '];

function getData(number) {
  let data = [];
  for(var i=0; i<number; ++i)
  {
    data.push("" + i);
  }
  
  return data;
}

class ScrollToExample extends Component {
  
  getItemLayout = (data, index) => (
    { length: 50, offset: 50 * index, index }
  )
  
  getColor(index) {
    const mod = index%3;
    return COLORS[mod];
  }
  
  scrollToIndex = () => {
    let randomIndex = Math.floor(Math.random(Date.now()) * this.props.data.length);
    this.flatListRef.scrollToIndex({animated: true, index: randomIndex});
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Button
            onPress={this.scrollToIndex}
            title="Tap to scroll to item"
            color=" lightseagreen"
          />
        </View>
        <FlatList
          style={{ flex: 1 }}
          ref={(ref) => { this.flatListRef = ref; }}
          keyExtractor={item => item}
          getItemLayout={this.getItemLayout}
          initialScrollIndex={5}
          initialNumToRender={20}
          renderItem={({ item, index}) => (
              <View style={{...style, backgroundColor: this.getColor(index)}}>
                <Text>{item}</Text>
              </View>
            )}
          {...this.props}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width,
    height: 50,
    flex: 1,
    borderWidth: 1
  },
  header: {
    height: 80, 
    backgroundColor: 'darkturquoise', 
    alignItems: 'center', 
    justifyContent: 'center'
  }
});

export default class app extends Component {
  render() {
    return  <ScrollToExample
              data={getData(100)}
            />
  }
}
